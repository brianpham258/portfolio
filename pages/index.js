import React from 'react';
import Head from 'next/head';

import { PageLayout } from '@core/layout';
import { HomeContentContainer } from '@home';

function Home() {
    return (
        <>
            <Head>
                <title>Brian Pham's e-portfolio</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=no, shrink-to-fit=no"
                />
            </Head>
            <PageLayout>
                <HomeContentContainer />
            </PageLayout>
        </>
    );
}

export default Home;
