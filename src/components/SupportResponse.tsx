import React, { FC } from 'react';
import { Text } from '@urban-bot/core';

export const SupportResponse: FC<{}> = () => {
    return (
        <Text>
            {`You can learn all about Cryptuoso Platform, how to use and configure signals, robots and exchange accounts in our Documentation site (https://support.cryptuoso.com/).
❓Having common questions with signals or robots? Ask it in our Telegram Community (https://t.me/joinchat/ACVS-0zaWVBgAYm8gOKYHA) and we will help you.
❗️Have a personal problem regarding connecting an exchange or billing? You can reach us at support@cruptuoso.com (http://mailto:support@cruptuoso.com/).
Also you can type and send your message right now ⬇️ to this bot
(works only while you in Support section)
https://support.cryptuoso.com/`}
        </Text>
    );
};
