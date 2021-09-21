import styled from 'styled-components';

const StyledComponentLibrary = styled.div`
  color: blue;
`;

export function ComponentLibrary() {
  console.log(3);
  return (
    <StyledComponentLibrary>
      <h1>Welcome to ComponentLibrary!</h1>
    </StyledComponentLibrary>
  );
}

export default ComponentLibrary;
