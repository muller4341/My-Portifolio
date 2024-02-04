
import styled from 'styled-components';

// Styled components
const SignupContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const FormButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// React component
const Signup = () => {
  return (
    <SignupContainer>
      <h2>Sign Up</h2>
      <SignupForm>
        <FormInput type="text" placeholder="Username" />
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        <FormButton type="submit">Sign Up</FormButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
