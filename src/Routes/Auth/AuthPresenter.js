import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    border-radius: 0px;
    width: 100%;
    max-width: 350px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding:20px 0px;
`;

const Link = styled.span`
    color:${props=>props.theme.blueColor};
    cursor:pointer;
`;

const Form = styled(Box)`
    padding:40px;
    padding-bottom:30px;
    margin-bottom: 15px;
    form{
        width:100%;
        input{
            width:100%;
            &:not(last-child){
                margin-bottom:10px;
            }
        }
        button{
                margin-top:7px;
            }
    }
`;


export default ({
    action,
    setAction,
    username,
    firstName,
    lastName,
    email,
    onLogin
}) => {
    return (
    <Wrapper>
        <Form>
            {action === "logIn"? (
                <form>
                    <Input placeholder={"Email"} {...email} type="email" onSubmit={onLogin}/>
                    <Button text="Log In"/>
                </form>
            ):(
                <form>
                    <Input placeholder={"First name"} {...firstName}/>
                    <Input placeholder={"Last name"} {...lastName}/>
                    <Input placeholder={"Email"} {...email} type="email" onSubmit={onLogin}/>
                    <Input placeholder={"Username"} {...username}/>
                    <Button text="Sign Up"/>
                </form>
            )}

        </Form>
        <StateChanger>
            {action === "logIn" ? (
                <>
                    Don't have an account? {" "}
                    <Link onClick={()=>setAction("signUp")}>Sign up</Link>
                </>
                ) : (
                <>
                    Have an account? {" "}
                    <Link onClick={()=>setAction("logIn")}>Log in</Link>
                </>
            )}
        </StateChanger> 
    </Wrapper>
    );
};