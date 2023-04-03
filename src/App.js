import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Rating from './Components/Rating';

function App() {
  let [count,Setstatus] = useState(0);
  let [toogle1,Settoogle1] = useState(true);
  let [toogle2,Settoogle2] = useState(true);
  let [toogle3,Settoogle3] = useState(true);
  let [toogle4,Settoogle4] = useState(true);
  let [toogle5,Settoogle5] = useState(true);
  let [toogle6,Settoogle6] = useState(true);

return <div>  
 <Navbar data={{count,Setstatus}}/>
 <Header/>
  <section className="py-5">
     <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
             <div className="col mb-5">
                <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                            <div className="text-center">
                              <h5 className="fw-bolder">Fancy Product</h5>
                              $40.00 - $80.00
                              </div>
                              </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                          </div>
                        </div>
              </div>
        <div className="col mb-5">
                  <div className="card h-100">
                  <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <Rating/>
                    <span class="text-muted text-decoration-line-through">$20.00</span>$18.00
                      </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                            { toogle1?<button className="btn btn-outline-dark mt-auto" 
                                onClick={()=>{Setstatus(++count);
                                Settoogle1(!toogle1);
                                }}>
                                Add to cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" 
                                onClick={()=>{Setstatus(--count);
                                Settoogle1(!toogle1);
                                }}>
                                Remove</button>
                                }
                                </div>
                              </div>
                           </div>
        </div>
             <div className="col mb-5">
                  <div className="card h-100">
                  <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                       <div className="card-body p-4">
                           <div className="text-center">
                              <h5 className="fw-bolder">Sale Item</h5>
                              <span class="text-muted text-decoration-line-through">$50.00</span>$25.00
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            { toogle2?<button className="btn btn-outline-dark mt-auto" 
                            onClick={()=>{Setstatus(++count);
                                Settoogle2(!toogle2);
                                }}>
                                Add to cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                Setstatus(--count);
                                Settoogle2(!toogle2);
                                }}>
                                Remove</button>
                            }
                          </div>
                      </div>
                  </div>
             </div>
             <div className="col mb-5">
                  <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                       <div className="card-body p-4">
                           <div className="text-center">
                              <h5 className="fw-bolder">Popular Item</h5>
                              <Rating/>
                                    $40.00
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            { toogle3?<button className="btn btn-outline-dark mt-auto" 
                            onClick={()=>{Setstatus(++count);
                                Settoogle3(!toogle3);
                                }}>
                                Add to cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                Setstatus(--count);
                                Settoogle3(!toogle3);
                                }}>
                                Remove</button>
                            }
                          </div>
                      </div>
                  </div>
             </div>
             <div className="col mb-5">
                  <div className="card h-100">
                  <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                       <div className="card-body p-4">
                           <div className="text-center">
                              <h5 className="fw-bolder">Sale Item</h5>
                              <span class="text-muted text-decoration-line-through">$50.00</span>$25.00
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            { toogle4?<button className="btn btn-outline-dark mt-auto" 
                            onClick={()=>{Setstatus(++count);
                                Settoogle4(!toogle4);
                                }}>
                                Add to cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                Setstatus(--count);
                                Settoogle4(!toogle4);
                                }}>
                                Remove</button>
                            }
                          </div>
                      </div>
                  </div>
             </div>
             <div className="col mb-5">
                  <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                       <div className="card-body p-4">
                           <div className="text-center">
                              <h5 className="fw-bolder">Fancy Product</h5>
                              $120.00 - $280.00
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                      </div>
                  </div>
             </div>
             <div className="col mb-5">
                  <div className="card h-100">
                  <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                       <div className="card-body p-4">
                           <div className="text-center">
                              <h5 className="fw-bolder">Special Item</h5>
                              <Rating/>
                              <span class="text-muted text-decoration-line-through">$20.00</span>$18.00
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            { toogle5?<button className="btn btn-outline-dark mt-auto" 
                            onClick={()=>{Setstatus(++count);
                                Settoogle5(!toogle5);
                                }}>
                                Add to cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                Setstatus(--count);
                                Settoogle5(!toogle5);
                                }}>
                                Remove</button>
                            }
                          </div>
                      </div>
                  </div>
             </div>
             <div className="col mb-5">
                  <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                       <div className="card-body p-4">
                           <div className="text-center">
                              <h5 className="fw-bolder">Popular Item</h5>
                              <Rating/>
                              $40.00                            
                              </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            { toogle6?<button className="btn btn-outline-dark mt-auto" 
                            onClick={()=>{Setstatus(++count);
                                Settoogle6(!toogle6);
                                }}>
                                Add to cart</button>
                                :
                                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                Setstatus(--count);
                                Settoogle6(!toogle6);
                                }}>
                                Remove</button>
                            }
                          </div>
                      </div>
                  </div>
             </div>
          </div>
      </div>
     </section>
     <Footer/>
  </div>
}

export default App;