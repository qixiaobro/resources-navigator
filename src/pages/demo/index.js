import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DemoText, StoreText } from './style'
import {actionCreators} from './store'

class Demo extends Component {
    render() {
        const { storeHello } = this.props;
        return (
            <DemoText>
                hello,this is a demo page!<br />
                <StoreText>this is from {storeHello}</StoreText>
                <input ref={(input)=>{this.word=input}}></input>
                <button onClick={()=>this.props.changeWord(this.word)}>changeWord</button>
            </DemoText>
        )
    }
}

const mapState = (state) => ({
    storeHello: state.getIn(['demo', 'storeHello'])
})

const mapDispatch = (dispatch) => ({
    changeWord(word){
        if(!word.value) return 
        dispatch(actionCreators.changeStoreWord(word.value))
    }
})
export default connect(mapState, mapDispatch)(Demo)