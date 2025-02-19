'use client'

//CHAKRA
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";

//REACT
import React, { 
  useContext, 
  useEffect, 
  useState 
} from "react";

//NEXT JS
import { useRouter } from "next/navigation";

//REACT ICONS
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

//ASSETS
import illustration from "/public/img/auth/auth.png";

//INTERNAL COMPONENTS
import { LoadingContext } from "contexts/LoadingContext";
import AuthLayout from "components/auth/AuthLayout";

//AWS
import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";


import configAws from "aws-exports";

//AWS CONFIGURATION
Amplify.configure(configAws);

//SERVICES

function SignIn() {

  //CONTEXT
  const loader = useContext(LoadingContext);

  useEffect(() => {
    //@ts-ignore
    loader.setLoading(false);
  }, []);

  //TOASTS
  const showError = (message: string, seconds: number = 5) => {
    return toast({
      position: 'top-right',
      title: 'Oops!',
      description: message,
      status: 'error',
      duration: seconds*1000,
      isClosable: true,
    });
  }

  //VARIABLES
  const toast = useToast();
  const router = useRouter();
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const brandStars = useColorModeValue('brand.500', 'brand.400');

  //STATES
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //FUNCTIONS
  const updateInputEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const updateInputPassword = (evt) => {
    setPassword(evt.target.value);
  };
  
  const signInClient = async () => { 
    if (email && password) {
      //@ts-ignore
      loader.setLoading(true);
        try {
              const {isSignedIn} = await signIn({
                username: email,
                password: password,
                options: {
                  authFlowType: 'USER_SRP_AUTH'
            }
              })
              if (isSignedIn) {
                router.push('/user/dashboards');
              }
            } catch (error) {
              //@ts-ignore
              loader.setLoading(false);
              showError(error.message);
            }
    } else {
      showError('Please complete the required fields');
    }
  };

  return (
    <AuthLayout 
      illustrationBackground={illustration?.src}
    >
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your email and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <FormControl>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Email
              <Text 
                color={brandStars}
              >
                *
              </Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="email"
              placeholder="mail@juddy.dev"
              mb="24px"
              fontWeight="500"
              size="lg"
              value={email}
              id="email"
              onInput={e => updateInputEmail(e)}
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Password
              <Text 
                color={brandStars}
              >
                *
              </Text>
            </FormLabel>
            <InputGroup 
              size="md"
            >
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Min. 8 characters"
                mb="24px"
                size="lg"
                type={show ? "text" : "password"}
                variant="auth"
                value={password}
                id="password"
                onInput={e => updateInputPassword(e)}
              />
              <InputRightElement 
                display="flex" 
                alignItems="center" 
                mt="4px"
              >
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={
                    show 
                      ? RiEyeCloseLine 
                      : MdOutlineRemoveRedEye
                    }
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={signInClient}
            >
              Sign In
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </AuthLayout>
  );  
};

export default SignIn;
