/**
 * Write a functional component that accepts an arbitrarily nested object as a prop. 
 * Each key/property of the object is a word and its associated value is either 
 * (1) an object of the same format or (2) a definition string.
 * 
 * When rendered, the component should display the nested object legibly,
 * with each word shown beside its definition and each subobject indented beyond its enclosing object. 
 */
import React from "react";
import AppNavbar from "../commons/appNavbar";
import MainComponent from '../components/mainComponent';

const RenderNestedObject = () => {
  return (
    <>
      <AppNavbar />
      <MainComponent />
    </>
  )
};

export default RenderNestedObject;