import React, { useState } from 'react';
import { View } from 'react-native';
import SectionFlatList from './SectionFlatList';
import AppButton from './AppButton.js'

const GoalListComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
    <View>
      <AppButton text={'Add goal'} functionOnPress={toggleModal}></AppButton>
      <SectionFlatList isVisible={isModalVisible} onClose={toggleModal} />
    </View>  
    </>
  );
};

export default GoalListComponent;