
import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, Alert } from 'react-native';
import Style from './Style'
import { connect } from 'react-redux'
import * as actions from "../../middleware/action";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Images from '../../assets/images/Images'


const MenuModal = (props: any) => {
  const closeButtonFunction = () => {
    props.changeVisibleStatus(false)
  }

  // useEffect(() => {
  //   console.log("setModalVisible(props.visibleModal):", props.visibleModal)
  //   // setModalVisible(props.visibleModal)
  // }, [props.visibleModal])

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visibleModal}
      onRequestClose={closeButtonFunction}>
      <View
        style={Style.modalContainer}>
        <View style={Style.headerContainer}>
          <TouchableOpacity
            style={Style.closeButton}
            onPress={closeButtonFunction}>
            <FontAwesome5 style={Style.closeButtonText} name={'angle-down'} />
          </TouchableOpacity>
        </View>
        <View style={Style.rootContainer}>
          <Image source={Images.images.home.noodle} style={Style.imageSize} />
          <View style={Style.titleContainer}>
            <View style={Style.innerTitleContainer}>
              <Text style={Style.titleMenuText}>
                Soup Beef Noodle
              </Text>
              <Text style={Style.titleCatagoryMenuText}>
                Chaineses food
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => { alert('added to fevorite') }}>
              <FontAwesome style={Style.favoriteIcon} name={'heart'} />
            </TouchableOpacity>
          </View>
          <View style={Style.amountContainer}>
            <TouchableOpacity
              onPress={() => { alert('decrease') }}>
              <FontAwesome5 style={Style.decreaseIcon} name={'minus'} />
            </TouchableOpacity>

            <View>
              <Text style={Style.amountText}>
                20
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => { alert('increase') }}>
              <FontAwesome5 style={Style.increaseIcon} name={'plus'} />
            </TouchableOpacity>

          </View>

        </View>

      </View>
    </Modal>
  )
}
const mapStateToProps = (state: any) => {
  return {
    visibleModal: state.reducer.visibleModal,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeVisibleStatus: (status: boolean) => {
      return dispatch(actions.changeVisibleStatus(status));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuModal)