'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState(null);
    const imageInputRef = useRef();

    const handleUpload = () => {
        imageInputRef.current.click();
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {pickedImage ? <Image src={pickedImage} alt="image picked by the user." fill /> : <p>No image picked yet.</p>}
                </div>
                <input ref={imageInputRef} onChange={handleImageChange} className={classes.input} type='file' id={name} accept='image/png, image/jpeg' name={name} required />
                <button onClick={handleUpload} className={classes.button} type='button'>
                    Pick an image
                </button>
            </div>
        </div>
    )
};

export default ImagePicker;