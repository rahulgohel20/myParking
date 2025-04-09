import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
        <div className="mt-5">
        <footer className="text-center text-lg-start text-white" style={{backgroundColor:"black"}}>
           
            <div className="container p-4 pb-0">
                
                <section className="">
                    
                    <div className="row">
                        
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Online Car Care
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>
                        

                        <hr className="w-100 clearfix d-md-none" />

                        
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                            <p>
                                <a className="text-white" style={{cursor:"pointer"}}>Online Book Parking Slot</a>
                            </p>
                            <p>
                                <a className="text-white" style={{cursor:"pointer"}}>Add Your Parking Lot</a>
                            </p>
                            <p>
                                <a className="text-white" style={{cursor:"pointer"}}>Premium Book SLot</a>
                            </p>

                        </div>
                        

                        <hr className="w-100 clearfix d-md-none" />

                       
                        <hr className="w-100 clearfix d-md-none" />

                        
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fas fa-home mr-3"></i> Gujarat, India</p>
                            <p><i className="fas fa-envelope mr-3"></i> myParking@gmail.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 91 85306 96935</p>

                        </div>
                        

                        
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                            
                            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor:"#3b5998"}} href="#!"
                                role="button"><FontAwesomeIcon icon={faFacebook}/></a>

                            
                            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor:"#55acee"}} href="#!"
                                role="button"><FontAwesomeIcon icon={faTwitter}/></a>

                            
                            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor:"#dd4b39"}} href="#!"
                                role="button"><FontAwesomeIcon icon={faGoogle}/></a>

                            
                            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor:"#ac2bac"}} href="#!"
                                role="button"><FontAwesomeIcon icon={faInstagram}/></a>

                            
                            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor:"#0082ca"}} href="#!"
                                role="button"><FontAwesomeIcon icon={faLinkedin}/></a>
                            
                            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor:"#333333"}} href="#!"
                                role="button"> <FontAwesomeIcon icon={faGithub}/></a>
                        </div>
                    </div>
                </section>
            </div>

            <div className="text-center p-3" style={{backgroundColor:"black"}}>
                © 2024 Copyright:
                <a className="text-white" style={{textDecoration:"none"}} href="https://mdbootstrap.com/">MyParking</a>
            </div>
        </footer>
    </div>
  )
}
