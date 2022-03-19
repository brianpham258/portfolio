/* eslint-disable */
import Document, { Main, Head, NextScript, Html } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" type="text/css" href="/static/fonts/fonts.v1.css" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
