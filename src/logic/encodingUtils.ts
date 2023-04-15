import React, { useState, useEffect } from 'react'
import * as baseED from './funciones';


export const useBaseEncodingLogic = () => {

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [action, setAction] = useState('encode');
  const [encoding, setEncoding] = useState('base64');
  const [convertedText, setConvertedText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let convertedText: string = '';

    if (action === 'encode') {
      switch (encoding) {
        case 'base64':
          convertedText =  baseED.base64_encode(inputText);
          break;
        case 'base32':
          convertedText = baseED.base32_encode(inputText);
          break;
        case 'base58':
          convertedText = baseED.base58_encode(inputText)
          break;
        case 'base91':
          convertedText = baseED.base91_encode(inputText)
          break;
        }
      } else {
        switch (encoding) {
          case 'base64':
            convertedText = baseED.base64_decode(inputText);
            break;
          case 'base32':
            convertedText = baseED.base32_decode(inputText)
            break;
          case 'base58':
            convertedText = baseED.base58_decode(inputText)
            break;
          case 'base91':
            convertedText = baseED.base91_decode(inputText)
            break;
        }
      }

      setOutputText(convertedText);


    };
    useEffect(() => {
      setConvertedText(outputText);
    }, [outputText]);

    return { inputText, setInputText, outputText, action, setAction, encoding, setEncoding, handleSubmit, convertedText };
};