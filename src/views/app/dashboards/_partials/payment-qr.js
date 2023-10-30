import CardWrapper from 'containers/wrapper/card-wrapper';
import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const PaymentQR = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [qrCodeSvg,setQrCodeSvg] = useState('');
//    console.log(props?.qrCode);
    // useEffect(()=>{
        
    //         fetchQrCode()
            
    // },[props.qrData?.refe_id])
    
    // const fetchQrCode = async () => { 
    //     setIsLoading(true)      
    //     try {
    //         const res = await axios.get(`${apiBaseUrl}/api/v1/generateQr/${props.qrData?.refe_id}`)
    //         setQrCodeSvg(res.data?.slice(39)); 
    //     } catch (error) {
    //         console.log(error);
    //     } 
    //     setIsLoading(false)     
    // } 
    const bodyContent = () => {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <div>
                            <img className="mb-2" src={`data:image/svg+xml;base64,${Buffer.from(props?.qrCode, 'utf8').toString('base64')}`}width="60%" height="auto" alt="Payment Link with QR"/>
                        </div>
                        <ButtonGroup className="mb-3">
                            <Button
                                className="btn btn-xs btn-primary mr-1"
                                title="Download QR"
                                color=""
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-cloud-download mr-1"></i>Download</span>
                            </Button>
                            <Button
                                className="btn btn-xs btn-primary"
                                title="Manage QR"
                                color=""
                                onClick={() => window.open(`/app/my-store/subscription/${props.qrData?.store_id}`, "_blank")}
                            >
                                <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-settings mr-1"></i>Manage</span>
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <React.Fragment>
            <div className="">
                <CardWrapper
                    headerTitle="Collect Payment with QR"
                    toggleOn={false}
                    isDefaultHeader={true}
                    footerEnabled={false}
                    isLoading={props.isLoading}
                    bodyContent={bodyContent}
                />
            </div>
        </React.Fragment>
    );
}
 
export default PaymentQR;