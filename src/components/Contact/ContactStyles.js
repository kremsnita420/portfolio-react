import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 3rem;
    
   
`

export const Form = styled.form`
      max-width: 70%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      @media ${(props) => props.theme.breakpoints.sm} {
            max-width: 100%;
            
          }

`


export const Label = styled.label`
      
`

export const Input = styled.input`
      width: 100%;
      height: 4rem;
      
`

export const Textarea = styled.textarea`
      min-width: 100%;
      min-height: 12rem;
`

