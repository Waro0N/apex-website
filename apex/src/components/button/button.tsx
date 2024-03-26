import React from 'react'
import { Button } from "@mui/material";

interface ApexButtonLayout {
    text : string;
    width: string;
    height?: string;
    onButtonClick?: () => void;
    backGroundColor?: string;
    TextColor?: string;
}


const ApexButton : React.FC<ApexButtonLayout> =  ({text, width, height,backGroundColor, TextColor, onButtonClick}) =>{
    const defaultBackgroundColor = 'white';
    const defaultButtonText = 'black'
    return(
        <> 
            <Button  sx={{
                     border: '1px solid black', // Border style
                     '&:hover': {
                         bgcolor: '#084c44', // Green background on hover
                         color: 'white', // White text color on hover
                         border: '1px solid black', // Border style on hover
                     },
                    width: { width },
                    height: height,
                    bgcolor: defaultBackgroundColor || backGroundColor, 
                    color: TextColor || defaultButtonText,
                }} onClick={onButtonClick}>{text}</Button>
        </>
    )

}
export default ApexButton;