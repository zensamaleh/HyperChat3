'use client';

import { useChatStore } from '@repo/common/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

const ChatPage = () => {
    const router = useRouter();
    const { currentThreadId, createThread } = useChatStore();

    useEffect(() => {
        if (currentThreadId) {
            router.push(`/chat/${currentThreadId}`);
        } else {
            const newThreadId = nanoid();
            createThread(newThreadId, { title: 'New Chat' }).then(() => {
                router.push(`/chat/${newThreadId}`);
            });
        }
    }, [currentThreadId, createThread, router]);

    return null; // This page will just handle the redirect, so it doesn't need to render anything.
};

export default ChatPage;
