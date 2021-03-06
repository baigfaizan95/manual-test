import React, { useState, useEffect, useMemo } from "react";

/* File */
import { questions } from "@/quiz.json";

/* Library */
import Container from "@material-ui/core/Container";

/* Components */
import Card from "@/components/Card";
import Button from "@/components/Button/Button";
import CustomStepper from "@/components/Stepper/index";

/* Assets */
import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";

/* Styles */
import { makeStyles } from "@material-ui/core/styles";
import variables, { keys } from "@/styles/variables";
import { breakpoint } from "@/styles/mixins";

const useStyles = makeStyles(() => {
  return {
    root: {
      paddingTop: "75px",
      paddingBottom: "60px",
    },
    question: {
      fontSize: "28px",
      fontFamily: variables.montserrat,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: "20px",
      ...breakpoint(keys.sm, "down", {
        fontSize: "24px",
      }),
    },
    wrapper: {
      paddingTop: "20px",
    },
    options: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      paddingTop: "30px",
      "& img": {
        ...breakpoint(keys.sm, "down", {
          width: "120px",
        }),
      },
    },
    value: {
      fontSize: "18px",
      fontFamily: variables.helvetica,
      lineHeight: 1.3,
      ...breakpoint(keys.sm, "down", {
        fontSize: "14px",
      }),
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "40px",
      "& > button": {
        marginLeft: "15px",
        "&:first-child": {
          marginLeft: 0,
        },
      },
    },
    result: {
      paddingTop: "40px",
    },
    status: {
      marginBottom: "30px",
      textAlign: "center",
    },
    description: {
      fontFamily: variables.openSans,
      textAlign: "center",
      fontSize: "20px",
      "& a": {
        color: variables.primary,
      },
    },
  };
});

const Quiz = () => {
  const [selection, setSelection] = useState(Array(questions.length).fill(null));
  const [activeStep, setActiveStep] = useState(0);
  const [submit, setSubmit] = useState(false);
  const classes = useStyles();

  const steps = useMemo(() => {
    return Array(questions.length).fill("");
  }, [questions]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep, submit]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const updateAnswer = (value) => () => {
    setSelection((arr) => [
      ...arr.slice(0, activeStep),
      value,
      ...arr.slice(activeStep + 1),
    ]);
  };

  return (
    <div className={classes.root}>
      <Container>
        {selection.some((s) => s === null) || !submit ? (
          <div className={classes.wrapper}>
            <CustomStepper steps={steps} activeStep={activeStep} alternativeLabel />
            <p className={classes.question}>{questions[activeStep].question}</p>
            <div className={classes.options}>
              {questions[activeStep].options.map((option, index) => {
                const [key, value] = Object.entries(option)[0];
                return (
                  <Card
                    key={index}
                    active={selection[activeStep] === value}
                    onClick={updateAnswer(value)}
                  >
                    {!["Yes", "No"].includes(key) ? (
                      <div dangerouslySetInnerHTML={{ __html: key }} />
                    ) : key === "Yes" ? (
                      <AiOutlineCheckCircle color={variables.fontColor} size={120} />
                    ) : (
                      <AiOutlineCloseCircle color={variables.fontColor} size={120} />
                    )}
                    <p className={classes.value}>{value}</p>
                  </Card>
                );
              })}
            </div>
            <div className={classes.footer}>
              {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
              {activeStep !== questions.length - 1 && (
                <Button
                  onClick={handleNext}
                  disabled={selection[activeStep] === null}
                >
                  Next
                </Button>
              )}
              {activeStep === questions.length - 1 && (
                <Button
                  onClick={() => setSubmit(true)}
                  disabled={selection[2] === null}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        ) : selection.includes(true) ? (
          <div className={classes.result}>
            <div className={classes.status}>
              <AiOutlineWarning size={130} />
            </div>
            <p className={classes.description}>
              Unfortunately, we are unable to prescribe this medication for you. This
              is because finasteride can alter the PSA levels, which maybe used to
              monitor for cancer. You should discuss this further with your GP or
              specialist if you would still like this medication.
            </p>
          </div>
        ) : (
          <div className={classes.result}>
            <div className={classes.status}>
              <FiThumbsUp size={130} />
            </div>
            <p className={classes.description}>
              Great news! We have the perfect treatment for your hair loss. Proceed
              to{" "}
              <a
                href="https://www.manual.co"
                target="_blank"
                rel="noopenner noreferrer"
              >
                www.manual.co
              </a>
              ,​ and prepare to say hello to your new hair!
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Quiz;
