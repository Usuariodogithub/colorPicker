import React,{useState } from 'react';
import styled from 'styled-components';


const ColorPickerContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
`;
  const ColorPreView=styled.div<{color:string}>`
  width:200px;
  height:100px;
  background-color:${({color})=> color};
  margin-bottom:20px;
  `;
  const ColorSelector= styled.input`
  width:200px;
  margin-bottom:10px;
  `;
  const App: React.FC = () => {
    const [color, setColor] = useState<string>('rgba(0, 0, 0, 1)');
  
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setColor(event.target.value);
    };
  
    return (
      <ColorPickerContainer>
        <ColorPreView color={color} />

        <ColorSelector
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <div>{color}</div>
      </ColorPickerContainer>
    );
  };
  
  export default App;