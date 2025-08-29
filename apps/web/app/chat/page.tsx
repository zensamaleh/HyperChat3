'use client';

import { useChatStore } from '@repo/common/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FullPageLoader } from '@repo/common/components';

const ChatPage = () => {
    const router = useRouter();
    const { currentThreadId, createThread, isInitialized } = useChatStore();

    useEffect(() => {
        if (!isInitialized) {
            return; // Wait for the store to be initialized
        }

        if (currentThreadId) {
            router.push(`/chat/${currentThreadId}`);
        } else {
            const newThreadId = nanoid();
            createThread(newThreadId, { title: 'New Chat' }).then(() => {
                router.push(`/chat/${newThreadId}`);
            });
        }
    }, [isInitialized, currentThreadId, createThread, router]);

    if (!isInitialized) {
        return <FullPageLoader />; // Show a loader while the store is initializing
    }

    return null; // Render nothing while redirecting
};

export default ChatPage;
