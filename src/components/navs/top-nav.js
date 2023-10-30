import React, {Component} from "react";
import {injectIntl} from "react-intl";
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ListGroupItem,
    Badge,
    ListGroup,
} from "reactstrap";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {
    setContainerClassnames,
    clickOnMobileMenu,
    logoutUser,
    changeLocale
} from "../../redux/actions";
import {
    isDarkSwitchActive,
    menuHiddenBreakpoint,
    searchPath,
} from "../../constants/default-values";
import {MobileMenuIcon, MenuIcon} from "../svg";
import {getCurrentUser, getDirection, setDirection} from "../../helpers/utils";
import ChangePassword from "./change-password";
import { createImageFromInitials } from "helpers/common";
import SelectStore from "views/app/common/components/store/select-store";
import TopnavDarkSwitch from "./dark-switch";

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInFullScreen: false,
            searchKeyword: "",
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };
    changePassToggle = () => {
        this.setState(prevState => ({
            changeModal: !prevState.changeModal
        }));
    };
    handleChangeLocale = (locale, direction) => {
        this.props.changeLocale(locale);
        const currentDirection = getDirection().direction;

        if (direction !== currentDirection) {
            setDirection(direction);
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    };
    isInFullScreen = () => {
        return (
            (document.fullscreenElement && document.fullscreenElement !== null) ||
            (document.webkitFullscreenElement &&
                document.webkitFullscreenElement !== null) ||
            (document.mozFullScreenElement &&
                document.mozFullScreenElement !== null) ||
            (document.msFullscreenElement && document.msFullscreenElement !== null)
        );
    };
    handleSearchIconClick = e => {
        if (window.innerWidth < menuHiddenBreakpoint) {
            let elem = e.target;
            if (!e.target.classList.contains("search")) {
                if (e.target.parentElement.classList.contains("search")) {
                    elem = e.target.parentElement;
                } else if (
                    e.target.parentElement.parentElement.classList.contains("search")
                ) {
                    elem = e.target.parentElement.parentElement;
                }
            }
            if (elem.classList.contains("mobile-view")) {
                this.search();
                elem.classList.remove("mobile-view");
                this.removeEventsSearch();
            } else {
                elem.classList.add("mobile-view");
                this.addEventsSearch();
            }
        } else {
            this.search();
        }
    };
    addEventsSearch = () => {
        document.addEventListener("click", this.handleDocumentClickSearch, true);
    };
    removeEventsSearch = () => {
        document.removeEventListener("click", this.handleDocumentClickSearch, true);
    };
    handleDocumentClickSearch = e => {
        let isSearchClick = false;
        if (
            e.target &&
            e.target.classList &&
            (e.target.classList.contains("navbar") ||
                e.target.classList.contains("simple-icon-magnifier"))
        ) {
            isSearchClick = true;
            if (e.target.classList.contains("simple-icon-magnifier")) {
                this.search();
            }
        } else if (
            e.target.parentElement &&
            e.target.parentElement.classList &&
            e.target.parentElement.classList.contains("search")
        ) {
            isSearchClick = true;
        }
        if (!isSearchClick) {
            const input = document.querySelector(".mobile-view");
            if (input && input.classList) input.classList.remove("mobile-view");
            this.removeEventsSearch();
            this.setState({
                searchKeyword: ""
            });
        }
    };
    handleSearchInputChange = e => {
        this.setState({
            searchKeyword: e.target.value
        });
    };
    handleSearchInputKeyPress = e => {
        if (e.key === "Enter") {
            this.search();
        }
    };

    search = () => {
        this.props.history.push(searchPath + "/" + this.state.searchKeyword);
        this.setState({
            searchKeyword: ""
        });
    };

    toggleFullScreen = () => {
        const isInFullScreen = this.isInFullScreen();

        var docElm = document.documentElement;
        if (!isInFullScreen) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        this.setState({
            isInFullScreen: !isInFullScreen
        });
    };

    handleLogout = () => {
        this.props.logoutUser(this.props.history);
    };

    menuButtonClick = (e, menuClickCount, containerClassnames) => {
        e.preventDefault();

        setTimeout(() => {
            var event = document.createEvent("HTMLEvents");
            event.initEvent("resize", false, false);
            window.dispatchEvent(event);
        }, 350);
        this.props.setContainerClassnames(
            ++menuClickCount,
            containerClassnames,
            this.props.selectedMenuHasSubItems
        );
    };
    mobileMenuButtonClick = (e, containerClassnames) => {
        e.preventDefault();
        this.props.clickOnMobileMenu(containerClassnames);
    };

    render() {
        const {containerClassnames, menuClickCount, locale} = this.props;
        const {messages} = this.props.intl;
        return (
            <nav className="navbar fixed-top">
                <div className="d-flex align-items-center navbar-left">
                    <NavLink
                        to="#"
                        className="menu-button d-none d-md-block"
                        onClick={e =>
                            this.menuButtonClick(e, menuClickCount, containerClassnames)
                        }
                    >
                        <MenuIcon/>
                    </NavLink>
                    <NavLink
                        to="#"
                        className="menu-button d-xs-block d-sm-block d-md-none"
                        onClick={e => this.mobileMenuButtonClick(e, containerClassnames)}
                    >
                        <MobileMenuIcon/>
                    </NavLink>
                    
                    <div className="top_store_selection w-60 mt-1"><SelectStore /></div>

                    {/* <div className="search" data-search-path="/app/pages/search">
                        <Input
                            name="searchKeyword"
                            id="searchKeyword"
                            placeholder={messages["menu.search"]}
                            value={this.state.searchKeyword}
                            onChange={e => this.handleSearchInputChange(e)}
                            onKeyPress={e => this.handleSearchInputKeyPress(e)}
                        />
                        <span
                            className="search-icon"
                            onClick={e => this.handleSearchIconClick(e)}
                        >
                            <i className="simple-icon-magnifier"/>
                        </span>
                    </div> */}

                    {/*<div className="d-inline-block">*/}
                    {/*  <UncontrolledDropdown className="ml-2">*/}
                    {/*    <DropdownToggle*/}
                    {/*      caret*/}
                    {/*      color="light"*/}
                    {/*      size="sm"*/}
                    {/*      className="language-button">*/}
                    {/*      <span className="name">{locale.toUpperCase()}</span>*/}
                    {/*    </DropdownToggle>*/}
                    {/*    <DropdownMenu className="mt-3" right>*/}
                    {/*      {localeOptions.map(l => {*/}
                    {/*        return (*/}
                    {/*          <DropdownItem*/}
                    {/*            onClick={() => this.handleChangeLocale(l.id, l.direction)}*/}
                    {/*            key={l.id}*/}
                    {/*          >*/}
                    {/*            {l.name}*/}
                    {/*          </DropdownItem>*/}
                    {/*        );*/}
                    {/*      })}*/}
                    {/*    </DropdownMenu>*/}
                    {/*  </UncontrolledDropdown>*/}
                    {/*</div>*/}
                    {/*<div className="position-relative d-none d-none d-lg-inline-block">*/}
                    {/*  <a*/}
                    {/*    className="btn btn-outline-primary btn-sm ml-2"*/}
                    {/*    target="_top"*/}
                    {/*    href="https://themeforest.net/cart/configure_before_adding/22544383?license=regular&ref=ColoredStrategies&size=source"*/}
                    {/*  >*/}
                    {/*    <i className="iconsminds-support"></i> Support*/}
                    {/*  </a>*/}
                    {/*</div>*/}
                </div>

                <a className="navbar-logo" href="/">
                    <span className="logo d-none d-xs-block"/>
                    <span className="logo-mobile d-block d-xs-none"/>
                </a>

                <div className="navbar-right">
                    {/* <div className="position-relative d-none d-none d-lg-inline-block">
                        <SelectStore />
                    </div> */}

                    <div className="position-relative d-none d-none d-lg-inline-block mr-3">
                        <a
                            className="btn btn-outline-primary btn-xs"
                            target="_top"
                            href="#." onClick={this.toggle}
                        >
                            <i className="iconsminds-support"></i><span className=""> Key Contact Details</span>
                        </a>
                    </div>

                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>
                            <span>Key Contact Details</span>
                        </ModalHeader>
                        <ModalBody className="key_contact">
                            <h4><strong>1. Key Account Manager</strong></h4>
                            <p>For any query related with new/existing business, campaign, enabling new features,
                                product, SMS, new
                                stores, etc </p>
                            <ListGroup className="mb-4">
                                <ListGroupItem className="d-flex justify-content-between bg-transparent">
                                    <span>Arnob Aditya Mamun</span>
                                    <Badge className="badge-outline-primary" color="">01749190095</Badge>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between bg-transparent">
                                    <span>Contact No</span>
                                    <Badge className="badge-outline-primary" color="">01749190095</Badge>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between bg-transparent">
                                    <span>Email Address</span>
                                    <Badge className="badge-outline-primary" color="">
                                        <a href="mailto:arnob.mamun@sslcommerz.com">arnob.mamun@sslcommerz.com</a>
                                    </Badge>
                                </ListGroupItem>
                            </ListGroup>

                            <h4><strong>2. Operation</strong></h4>
                            <p>For any query related with transaction, refund, chargeback, emi and settlement</p>
                            <ListGroup className="mb-4">
                                <ListGroupItem className="d-flex justify-content-between bg-transparent">
                                    <span>Email Address</span>
                                    <Badge className="badge-outline-primary" color="">
                                        <a href="mailto:operation@sslcommerz.com">operation@sslcommerz.com</a>
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between bg-transparent">
                                    <span>Telephone No</span>
                                    <Badge className="badge-outline-primary" color="">+880 961222 5222</Badge>
                                </ListGroupItem>
                            </ListGroup>

                            <h4><strong>3. Technical</strong></h4>
                            <p>For any query related with SSLCOMMERZ API(s) and Integration</p>
                            <ListGroup className="">
                                <ListGroupItem className="d-flex justify-content-between bg-transparent">
                                    <span>Email Address</span>
                                    <Badge className="badge-outline-primary" color="">
                                        <a href="mailto:integration@sslcommerz.com">integration@sslcommerz.com</a>
                                    </Badge>
                                </ListGroupItem>
                            </ListGroup>
                        </ModalBody>
                    </Modal>
                    {isDarkSwitchActive && <TopnavDarkSwitch/>}
                    <div className="header-icons d-inline-block align-middle mr-0">
                        {/*<TopnavEasyAccess />*/}
                        {/* <TopnavNotifications/> */}
                        <button
                            className="header-icon btn btn-empty d-none d-sm-inline-block"
                            type="button"
                            id="fullScreenButton"
                            onClick={this.toggleFullScreen}
                        >
                            {this.state.isInFullScreen ? (
                                <i className="simple-icon-size-actual d-block"/>
                            ) : (
                                <i className="simple-icon-size-fullscreen d-block"/>
                            )}
                        </button>
                    </div>
                    <div className="user d-inline-block ml-3">
                        <UncontrolledDropdown className="dropdown-menu-right">
                            <DropdownToggle className="p-0" color="empty">
                                {/* <span className="name mr-3" style={{display: 'inline-block', verticalAlign: 'middle'}}>{getCurrentUser()?.uname || ''}</span> */}
                                <span className="">
                                    {/* <img alt="Profile" src="/assets/img/profile-pic-l.jpg"/> */}
                                    {createImageFromInitials(getCurrentUser()?.uname || '', 40, 0, 4)}
                                </span>
                            </DropdownToggle>
                            <DropdownMenu className="mt-3" right>
                                <DropdownItem header>{getCurrentUser()?.uname || 'Unknown User'}</DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem onClick={this.changePassToggle}>Change Password</DropdownItem>
                                {/* <DropdownItem divider/> */}
                                <DropdownItem onClick={() => this.handleLogout()}>Sign out</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <ChangePassword
                            changeModal={this.state.changeModal}
                            changePassToggle={this.changePassToggle}
                        />
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({menu, settings}) => {
    const {containerClassnames, menuClickCount, selectedMenuHasSubItems} = menu;
    const {locale} = settings;
    return {
        containerClassnames,
        menuClickCount,
        selectedMenuHasSubItems,
        locale
    };
};

export default injectIntl(
    connect(
        mapStateToProps,
        {setContainerClassnames, clickOnMobileMenu, logoutUser, changeLocale}
    )(TopNav)
);
