import React from "react";
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }

}

let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: () => {
            dispatch(
                addMessageActionCreator()
            )
        },

        changeMessage: (text) => {
            dispatch(
                changeMessageActionCreator(text)
            );
        }

    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer