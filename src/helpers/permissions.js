import { loadState } from "./local-storage";
import menus from "constants/menu";

export const mainMenus = (sub = false, type = 'display') => {
    let loadedMenuPermissions = {};
    try {
        loadedMenuPermissions = loadState('gogo_menu_permissions');
        loadedMenuPermissions = Object.keys(loadedMenuPermissions || {})
            .filter((key) => {
                if (type === 'display') {
                    return (
                        loadedMenuPermissions[key].is_display === 1 
                        && loadedMenuPermissions[key].can_view === 1 
                        && (sub ? loadedMenuPermissions[key].level === 1 : true));
                } else if (type === 'all') {
                    return true;
                }
                return false;
            })
            .sort((keyA, keyB) => {
                return loadedMenuPermissions[keyA].serialize_no < loadedMenuPermissions[keyB].serialize_no;
            })
            .reduce((obj, key) => {
                if (sub) {
                    let pMenu = {};
                    pMenu.main = loadedMenuPermissions[key];
                    pMenu.subs = subMenus(loadedMenuPermissions[key].id, loadedMenuPermissions[key].level + 1);
                    obj[key] = pMenu;
                } else {
                    obj[key] = loadedMenuPermissions[key];
                }
                return obj;
            }, {});
    } catch (e) {
        //
    }

    return loadedMenuPermissions;
};

export const subMenus = (parentId, level) => {
    let loadedMenuPermissions = {};
    try {
        loadedMenuPermissions = loadState('gogo_menu_permissions');
        loadedMenuPermissions = Object.keys(loadedMenuPermissions || {})
            .filter((key) => {
                return (
                    loadedMenuPermissions[key].is_display === 1 
                    && loadedMenuPermissions[key].can_view === 1 
                    && loadedMenuPermissions[key].level === level
                    && loadedMenuPermissions[key].parent_id === parentId);
            })
            .sort((keyA, keyB) => {
                return loadedMenuPermissions[keyA].serialize_no < loadedMenuPermissions[keyB].serialize_no;
            })
            .reduce((obj, key) => {
                obj[key] = loadedMenuPermissions[key];
                return obj;
            }, {});
    } catch (e) {
        //
    }

    return loadedMenuPermissions;
};

// action = display, linkable, view, add, edit, execute, delete
export const checkPermission = (path = false, permission = false, action = false) => {
    if (path) {
        return menus.filter(item => {
            let flag = false;
            if (item.hasOwnProperty('subs')) {
                item.subs.forEach(subItem => {
                    if (subItem.to === path) {
                        flag = true;
                        return;
                    }
                });
            } else {
                if (item.to === path) {
                    flag = true;
                }
            }
            return flag;
        }).length;
    }
    else if (permission) {
        let menuExist = mainMenus(false, 'all').hasOwnProperty(permission);
        if (menuExist) {
            if (action) {
                let menu = mainMenus(false, 'all')[permission];
                if (action === 'display') {
                    return menu.is_display === 1
                } else if (action === 'linkable') {
                    return menu.is_linkable === 1
                } else if (action === 'view') {
                    return menu.can_view === 1
                } else if (action === 'add') {
                    return menu.can_add === 1
                } else if (action === 'edit') {
                    return menu.can_edit === 1
                } else if (action === 'execute') {
                    return menu.can_execute === 1
                } else if (action === 'delete') {
                    return menu.can_delete === 1
                }
                return false;
            }
            else {
                return true;
            }
        }
        return false;
    }

    return false;
}