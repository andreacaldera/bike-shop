import styled from 'styled-components';

const StyledComponentLibrary = styled.div`
  color: green;
`;

export function ComponentLibrary() {
  return (
    <StyledComponentLibrary>
      <h1>Welcome to ComponentLibrary!</h1>
    </StyledComponentLibrary>
  );
}

export default ComponentLibrary;
