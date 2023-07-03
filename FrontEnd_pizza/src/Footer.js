import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                PIZZATERIA
              </h6>
              <p>
              OH YES, YOU DID IT!!!  .              
              YOU FOUND THE BEST SHOP IN TOWN.
              WELL BAKED SLICE OF PIZZA  AND 
              OTHER FRESH PRODUCTS
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pizza
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Coke
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sandwitch
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cake
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                MUMBAI -
                PUNE, MAHARASHTRA,
                INDORE, MADHYA PRADESH, INDIA.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                khan_ashraf33@yahoo.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 9619920275
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      DreamWorld © 2023.
        <a className='text-reset fw-bold' href='https://www.sunbeaminfo.com/branch/hinjawadi'>
         Powered By SUNBEAMITES
        </a>
      </div>
    </MDBFooter>
  );
}