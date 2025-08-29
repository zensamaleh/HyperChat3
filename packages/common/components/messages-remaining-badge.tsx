import { useUser } from '@clerk/nextjs';
import { useChatStore } from '@repo/common/store';
import { ChatMode } from '@repo/shared';
import { IconBrain } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function MessagesRemainingBadge() {
    const { user } = useUser();
    const chatMode = useChatStore(state => state.chatMode);

    const isAdvancedMode = chatMode === ChatMode.Pro || chatMode === ChatMode.Deep;

    if (
        !isAdvancedMode ||
        !user
    ) {
        return null;
    }

    return (
        <div className="relative flex w-full items-center justify-center px-3">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="border-border bg-tertiary/70 -mt-2 flex h-10  w-full flex-row items-center gap-2 rounded-b-xl border-x border-b px-3 pt-2 font-medium"
            >
                <div className="text-muted-foreground/50 text-xs flex items-center gap-2">
                    <IconBrain className="size-4" />
                    Brain Mode activé : votre assistant passe au niveau supérieur d’intelligence et de personnalisation.
                </div>
            </motion.div>
        </div>
    );
}
