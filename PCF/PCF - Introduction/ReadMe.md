# Deep Dive to PCF

Power Platform enables developers to create new controls over "Fields" and "Datasets".
Main development language is TypeScript, naturally it accepts plain JavaScript as well.

# Dev Environment Setup

# Microsoft PowerPlatform CLI

-pac pcf init
-pac auth create
-pac auth list
-pac auth select
-pac pcf push
-pac solution init --publisher-name <> --publisher-prefix <>
--eg: pac solution init -pp mjr -pn Mjolnir -o "C:\Prj\GH\PowerPlatform-Tutorials\PCF - Dataverse Solution\Solution"
output folder should not contain space or dash
-pac solution add-reference --path "C:\Prj\GH\PowerPlatform-Tutorials\PCF - Dataverse Solution\Control1"
add existing controls to solution
Solution or PCF contorl commands does not create a shell folder, make sure you arrange folders
PCF Control can be a sub-folder of Solution folder

# Folder Structure

# How to use in Forms

# How to use in Views

# How to use in Dashboards

# Set Null?

set to undefined in output

# .pcfproj vs .cdsproj

# PCF Builder XrmToolBox Plugin

# Component LifeCycle

# Test & Debug

# Debug vs Release Build

# Update Existing Component

# React/FluentUI From Scratch

# How to use in Canvas Apps

# PCF Gallery

#References
docs.microsoft.com
