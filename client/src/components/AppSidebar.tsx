import React from 'react'
import { useSidebar } from './ui/sidebar';
import { Building, FileText, Heart, Home, Settings } from 'lucide-react';

const AppSidebar = ({userType}: AppSidebarProps) => {
    const pathname = usePathname();
    const {toggleSidebar, open} = useSidebar;

    const navLinks = 
    userType === "manager"
        ?[
            {icon: Building, label: "Properties", href: "/managers/properties"},
            {icon: FileText, label: "Applications", href: "/managers/applications"},
            {icon: Settings, label: "Settings", href: "/managers/settings"},
        ]
    :[

        {icon: Heart, label: "Favorites", href: "/tenants/favorites"},
        {icon: FileText, label: "Applications", href: "/tenants/applications"},
        {icon: Home, label: "Residences", href: "/tenants/Residences"},
        {icon: Settings, label: "Settings", href: "/tenants/settings"},

    ]

    return <div>AppSidebar</div>
  
}

export default AppSidebar