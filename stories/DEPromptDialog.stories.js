/**
 *  @author sriram
 *
 **/
import React, { Component } from "react";
import DEPromptDialog from "../src/util/dialog/DEPromptDialog";
import { storiesOf } from "@storybook/react";

export default class DEPromptDialogTest extends Component {
    render() {
        const heading = "test";
        const prompt = "Enter something";
        const onOkBtnClick = (val) =>
            console.log("Got value from DEPromptDialog:" + val);

        return (
            <div>
                <DEPromptDialog
                    heading={heading}
                    prompt={prompt}
                    isRequired={true}
                    onOkBtnClick={onOkBtnClick}
                    dialogOpen={true}
                    multiline={true}
                />

                <DEPromptDialog
                    heading={heading}
                    prompt={prompt}
                    isRequired={true}
                    onOkBtnClick={onOkBtnClick}
                    dialogOpen={true}
                />

                <DEPromptDialog
                    heading={heading}
                    prompt={prompt}
                    isRequired={false}
                    onOkBtnClick={onOkBtnClick}
                    dialogOpen={true}
                    initialValue="My value here"
                />
            </div>
        );
    }
}

storiesOf("Prompt Dialog", module).add("with prompt dialog", () => (
    <DEPromptDialogTest />
));
