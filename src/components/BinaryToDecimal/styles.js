import styled from "styled-components"

export const Container = styled.div`
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 675px;
`
export const Panel = styled.div`
  color: #707070;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  color: #707070;
`

export const PanelForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 2rem;
    color: #707070;
  }

  select {
    font-size: 2rem;
    border: 1px solid #ced4da;
    border-radius: 5px;
    width: 98%;
    height: 52px;
    color: #707070;
  }
`

export const DisplayValues = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  border-radius: 10px;
  padding: 10px 25px;
  min-height: 540px;
  background-color: rgba(112, 112, 112, 0.15);

  label {
    color: #707070;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  input {
    color: #707070;
    height: 55px;
    font-size: 1.5rem;
    padding: 0 10px;
  }
`
