import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PhotoViewer = ({ name, picture }) => {
  return (
    <PhotoProvider>
      <PhotoView src={picture}>
        <img className="rounded-t-lg w-full h-full" src={picture} alt={name} />
      </PhotoView>
    </PhotoProvider>
  );
};

export default PhotoViewer;
