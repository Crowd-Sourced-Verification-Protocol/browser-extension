import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChromeMessage, Sender } from "../types";
import { getCurrentTabUId, getCurrentTabUrl } from "../chrome/utils";
import Landing from './Landing'

export const Home = () => {

    return (
        <div className="App">
            <Landing />
        </div>
    )
}
