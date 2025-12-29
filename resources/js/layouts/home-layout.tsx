import { useState } from "react";
import NavHome from "@/components/nav-home";
import { Promo, Branch, Prizes, Winners, Condition, Create, Confirmation } from '@/pages/registration';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const pageAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: {
    duration: 0.2,
    ease: easeInOut,
    },
};

export default function HomeLayout() {
    
    const [activeSection, setActiveSection] = useState('welcome');
    const [registeredName, setRegisteredName] = useState('');
    
    return (
        <div>
            {/* Landing Page Navbar */}
            <NavHome active={activeSection} onChange={setActiveSection} />

            <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 p-6 pt-3 lg:py-3 lg:grow starting:opacity-0">
                <main className="flex w-full h-full flex-col-reverse lg:flex-row">
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={activeSection}
                        {...pageAnimation}
                        className="w-full h-full"
                        >
                            {activeSection == 'welcome' && <Promo/>}
                            {activeSection == 'branch' && <Branch/>}
                            {activeSection == 'prizes' && <Prizes/>}
                            {activeSection == 'winners' && <Winners/>}
                            {activeSection == 'condition' && <Condition onAccept={() => setActiveSection('create')}/>}
                            {activeSection == 'create' && 
                                <Create 
                                    onAccept={(fullName) => {
                                        setRegisteredName(fullName);
                                        setActiveSection('confirmation');
                                        }}
                                    />}
                            {activeSection == 'confirmation' && (
                                <Confirmation fullName={registeredName}/>
                                )}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

            {/* Floating Button */}
            <div className="lg:block"> 
                {/* Render button if not in these section */}
                {activeSection !== 'condition' && activeSection !== 'create' && (
                <Button onClick={() => setActiveSection('condition')} 
                className="block fixed bottom-4 right-4"
                variant={"secondary"}
                >Register</Button>
                )}
            </div>
        </div>
    )
}