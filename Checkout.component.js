import  {Checkout as SourceCheckout} from "SourceRoute/Checkout/Checkout.component.js"

import ContentWrapper from 'Component/ContentWrapper';
import "./Checkout.extension.style.scss"
class Checkout extends SourceCheckout {
   constructor(props){
       super(props)
       this.state = {
           progress : 0,
           length: Object.entries(this.stepMap).length
       }
       console.log("props",props)
   } 
    parent = ()=>{
        return (
            <main block="Checkout">
                {this.progress()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                  >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
   progress = ()=>{
    return(
        <div className="outer-wrapper-horizontal" >
        {Object.entries(this.stepMap).map((item , i )=> {

           if(i+1 !==this.state.length) return(
            <div className="inner-wrapper" key={i} style={{left:`${(i+1 )* (100/ this.state.length +1)}%`}}>   
       {this.state.progress >(i) ? <div className="stepper-checked">&#10004;</div> : <div className="stepper-number">  {i+1 }</div>}
        <div className="stepper-desc">{item[1].title.value}</div>
        </div >
        )})}
        
        <div className="stepper-line"></div>
        <div className="stepper-line-active" style={{width:`${this.state.progress * (100/ this.state.length +1)}%`}}></div>
        </div>
    )
   }
  
    
     
    
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.checkoutStep !== prevProps.checkoutStep) {
        this.setState({...this.state,progress: this.state.progress + 1})
      }
    }
    render(){
 
        return(
            <>   
            {this.parent()}
            </>
        )
        
    }

} 

export default Checkout