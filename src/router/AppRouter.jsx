import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter";
import { JournalRoutes } from "../journal/router/JournalRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            
            <Route path="/auth/*" element={<AuthRouter/>}/>

            <Route path="/*" element={<JournalRoutes/>}/>

        </Routes>
    );
};
