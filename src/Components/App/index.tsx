import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// components
import Homepage from 'Components/Homepage';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Homepage />
        </QueryClientProvider>
    );
};

export default React.memo(App);
