import React, { Component } from 'react';
import { Colors1, Colors2 } from '../Themes/Colors';
export default class BaseComponent extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.mode ==! this.props.mode) {
            // console.log('componentWillReceiveProps: ', nextProps)
            // const color = nextProps.mode === true ? Colors1 : Colors2;
            // console.log('Color componentWillReceiveProps: ', Color)
            console.log( 'State componentWillReceiveProps: ' ,this.state)
            this.setColor(nextProps.mode);
        }
    }

    setColor = (mode) =>{
        console.log(this.state)
        const color = mode === true ? Colors1 : Colors2;
        this.setState({
            color
        })
        console.log('setColor: ', color)
    } 
    getColor = () =>{
        return Colors1
    }

}

