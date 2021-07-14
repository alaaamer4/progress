import  {Checkout as SourceCheckout} from "SourceRoute/Checkout/Checkout.component.js"
import {connect} from "react-redux"
import "./Checkout.extension.style.scss"
class Checkout extends SourceCheckout {
   constructor(props){
       super(props)
       console.log("props",props)
   }

    

    render(){
        console.log(this.props)
        
        return(
            <div className="outer-wrapper-horizontal" >
            
            <div className="inner-wrapper" style={{left:"25%"}}>   
            <div className="stepper-number" style={{backgroundColor:"red !important"}} >1</div>
            <div className="stepper-desc">Shipping</div>
            
            
            </div >
            <div className="inner-wrapper" style={{left:"50%" }}>   
            <div className="stepper-number" >2</div>
            <div className="stepper-desc">Review & payment</div>
           
          
            </div>
            
            <div className="stepper-line"></div>
            <div className="stepper-line-active" style={{width:`25%`}}></div>
            </div>
        )
    }

} 
export const mapStateToProps = (state)=>({
    totals: state.CartReducer.cartTotals,
    customer: state.MyAccountReducer.customer,
    guest_checkout: state.ConfigReducer.guest_checkout,
    countries: state.ConfigReducer.countries,
    isEmailAvailable: state.CheckoutReducer.isEmailAvailable,
   
})
export default connect(mapStateToProps)(Checkout)