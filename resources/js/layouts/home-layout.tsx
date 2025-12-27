import { useState } from "react";
import NavHome from "@/components/nav-home";
import { Promo, Branch, Prizes, Winners, Condition, Create , } from '@/pages/registration';
import { Button } from "@/components/ui/button";
import Confirmation from "@/pages/registration/confirmation";



export default function HomeLayout() {
    
    const [activeSection, setActiveSection] = useState('welcome');
    const [registeredName, setRegisteredName] = useState('');
    
    return (
        <div>
            {/* Landing Page Navbar */}
            <NavHome active={activeSection} onChange={setActiveSection} />

            <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 p-6 pt-3 lg:py-3 lg:grow starting:opacity-0">
                <main className="flex w-full h-full flex-col-reverse lg:flex-row">
                        {activeSection == 'welcome' && <Promo/>}
                        {activeSection == 'branch' && <Branch/>}
                        {activeSection == 'prizes' && <Prizes/>}
                        {activeSection == 'winners' && <Winners/>}
                        {activeSection == 'condition' && <Condition onAccept={() => setActiveSection('create')}/>}
                        {activeSection == 'create' && <Create onAccept={() => setActiveSection('confirmation')}/>}
                        {activeSection == 'confirmation' && <Confirmation/>}
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