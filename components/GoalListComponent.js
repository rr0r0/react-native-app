import React, { useState } from 'react';
import { View, Button } from 'react-native';
import SectionFlatList from './SectionFlatList';

const GoalListComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      
      <Button title="Add Goal" onPress={toggleModal} />
      <SectionFlatList isVisible={isModalVisible} onClose={toggleModal} />
      
    </>
  );
};

export default GoalListComponent;