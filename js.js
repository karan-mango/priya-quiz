
const questions = [
    {
        question: "What is the primary function of a computer?",
        answers: [
            { text: "Storing information", correct: false },
            { text: "Retrieving data", correct: false },
            { text: "Processing information", correct: true },
            { text: "Generating electricity", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a task performed by a computer?",
        answers: [
            { text: "Displaying data", correct: false },
            { text: "Storing information", correct: false },
            { text: "Cooking food", correct: true },
            { text: "Processing data", correct: false }
        ]
    },
    {
        question: "What are the four tasks generally performed by a computer?",
        answers: [
            { text: "Input, process, display, store", correct: true },
            { text: "Type, send, browse, play", correct: false },
            { text: "Retrieve, manipulate, create, delete", correct: false },
            { text: "Print, scan, copy, fax", correct: false }
        ]
    },
    {
        question: "What is the role of application software?",
        answers: [
            { text: "Make the computer work", correct: false },
            { text: "Understand user instructions", correct: false },
            { text: "Perform specific tasks", correct: true },
            { text: "Control hardware components", correct: false }
        ]
    },
    {
        question: "Which software category includes MSWord and Tally?",
        answers: [
            { text: "System software", correct: false },
            { text: "Application software", correct: true },
            { text: "Hardware software", correct: false },
            { text: "Peripheral software", correct: false }
        ]
    },
    {
        question: "What is an example of system software?",
        answers: [
            { text: "MS Excel", correct: false },
            { text: "Windows Operating System", correct: true },
            { text: "Photoshop", correct: false },
            { text: "Adobe Acrobat Reader", correct: false }
        ]
    },
    {
        question: "What is considered hardware in a computer system?",
        answers: [
            { text: "MS Word", correct: false },
            { text: "CPU", correct: true },
            { text: "Windows OS", correct: false },
            { text: "Microsoft Office Suite", correct: false }
        ]
    },
    {
        question: "Which is NOT an example of input device?",
        answers: [
            { text: "Mouse", correct: false },
            { text: "Monitor", correct: true },
            { text: "Keyboard", correct: false },
            { text: "Scanner", correct: false }
        ]
    },
    {
        question: "What is the role of a scanner?",
        answers: [
            { text: "Input device", correct: true },
            { text: "Output device", correct: false },
            { text: "Storage device", correct: false },
            { text: "Processing device", correct: false }
        ]
    },
    {
        question: "Which is an example of output device?",
        answers: [
            { text: "Keyboard", correct: false },
            { text: "Scanner", correct: false },
            { text: "Printer", correct: true },
            { text: "Mouse", correct: false }
        ]
    },
    {
        question: "What is the purpose of a printer?",
        answers: [
            { text: "Input data", correct: false },
            { text: "Store data", correct: false },
            { text: "Display data", correct: false },
            { text: "Produce hard copies", correct: true }
        ]
    },
    {
        question: "What type of printer uses impact technology?",
        answers: [
            { text: "Laser printer", correct: false },
            { text: "Dot matrix printer", correct: true },
            { text: "Inkjet printer", correct: false },
            { text: "Thermal printer", correct: false }
        ]
    },
    {
        question: "What does RAM stand for?",
        answers: [
            { text: "Read And Modify", correct: false },
            { text: "Random Access Memory", correct: true },
            { text: "Read-Only Memory", correct: false },
            { text: "Rapid Access Memory", correct: false }
        ]
    },
    {
        question: "Which is a primary storage memory?",
        answers: [
            { text: "Hard disk", correct: false },
            { text: "USB drive", correct: false },
            { text: "RAM", correct: true },
            { text: "CD-ROM", correct: false }
        ]
    },
    {
        question: "Which type of memory is volatile?",
        answers: [
            { text: "RAM", correct: true },
            { text: "ROM", correct: false },
            { text: "Cache memory", correct: false },
            { text: "Hard disk", correct: false }
        ]
    },
    {
        question: "What is the function of ROM?",
        answers: [
            { text: "Store data temporarily", correct: false },
            { text: "Allow read and write operations", correct: false },
            { text: "Retain data even when powered off", correct: true },
            { text: "Perform calculations", correct: false }
        ]
    },
    {
        question: "Which is a secondary storage device?",
        answers: [
            { text: "RAM", correct: false },
            { text: "Hard disk", correct: true },
            { text: "Cache memory", correct: false },
            { text: "CPU", correct: false }
        ]
    },
    {
        question: "What generation of computers used vacuum tubes?",
        answers: [
            { text: "First generation", correct: true },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What replaced vacuum tubes in second-generation computers?",
        answers: [
            { text: "Transistors", correct: true },
            { text: "Microprocessors", correct: false },
            { text: "Semiconductors", correct: false },
            { text: "Integrated circuits", correct: false }
        ]
    },
    {
        question: "When were microprocessors introduced?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: true },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What is the focus of fifth-generation computers?",
        answers: [
            { text: "Artificial intelligence", correct: true },
            { text: "Vacuum tubes", correct: false },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct

: false }
        ]
    },
    {
        question: "What is the purpose of an operating system?",
        answers: [
            { text: "Control hardware components", correct: false },
            { text: "Generate electricity", correct: false },
            { text: "Perform calculations", correct: false },
            { text: "Provide an interface between user and hardware", correct: true }
        ]
    },
    {
        question: "Which operating system acts as an interface between the user and hardware?",
        answers: [
            { text: "MS Word", correct: false },
            { text: "UNIX", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Photoshop", correct: false }
        ]
    },
    {
        question: "What does the operating system control?",
        answers: [
            { text: "Hardware only", correct: false },
            { text: "Software only", correct: false },
            { text: "Both hardware and software", correct: true },
            { text: "Neither hardware nor software", correct: false }
        ]
    },
    {
        question: "What is a function of an operating system?",
        answers: [
            { text: "Provide means for proper resource use", correct: true },
            { text: "Allocate resources to programs", correct: true },
            { text: "Control flow of data between applications", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is NOT an operating system?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Adobe Photoshop", correct: true },
            { text: "Linux", correct: false },
            { text: "MacOS", correct: false }
        ]
    },
    {
        question: "What function does an operating system perform during booting?",
        answers: [
            { text: "Load user programs into memory", correct: true },
            { text: "Erase memory", correct: false },
            { text: "Display results on monitor", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which operating system is known for its command-line interface?",
        answers: [
            { text: "Windows", correct: false },
            { text: "MacOS", correct: false },
            { text: "MS-DOS", correct: true },
            { text: "Linux", correct: false }
        ]
    },
    {
        question: "What is the primary function of an impact printer?",
        answers: [
            { text: "Create high-quality prints", correct: false },
            { text: "Operate silently", correct: false },
            { text: "Produce carbon copies", correct: true },
            { text: "Use toner cartridges", correct: false }
        ]
    },
    {
        question: "Which type of printer uses a ribbon?",
        answers: [
            { text: "Laser printer", correct: false },
            { text: "Inkjet printer", correct: false },
            { text: "Dot matrix printer", correct: true },
            { text: "Thermal printer", correct: false }
        ]
    },
    {
        question: "What type of memory is non-volatile?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: true },
            { text: "Cache memory", correct: false },
            { text: "Hard disk", correct: false }
        ]
    },
    {
        question: "Which storage device is most commonly used for long-term data storage?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: false },
            { text: "Hard disk", correct: true },
            { text: "Cache memory", correct: false }
        ]
    },
    {
        question: "What technology replaced magnetic drums in second-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Magnetic core", correct: true },
            { text: "Semiconductors", correct: false }
        ]
    },
    {
        question: "Which generation of computers introduced the concept of high-level programming languages?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: true },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What technology brought fourth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Magnetic drums", correct: false }
        ]
    },
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "Which operating system was known for its graphical user interface (GUI)?",
        answers: [
            { text: "MS-DOS", correct: false },
            { text: "UNIX", correct: false },
            { text: "MacOS", correct: true },
            { text: "Windows", correct: false }
        ]
    },
    {
        question: "What does MS-DOS stand for?",
        answers: [
            { text: "Microsoft Disk Operating System", correct: true },
            { text: "Micro System Disk Operating System", correct: false },
            { text: "Multi-Screen Disk Operating System", correct: false },
            { text: "Mobile System Disk Operating System", correct: false }
        ]
    },
    {
        question: "What function does the operating system perform regarding resources?",
        answers: [
            { text: "Allocate resources to programs", correct: true },
            { text: "Control hardware and software", correct: true },
            { text: "Co-ordinate flow of data", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which operating system is NOT Windows-based?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Linux", correct: true },
            { text: "Windows Server 2003", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the first generation of computers?",
        answers: [
            { text: "UNIVAC", correct: true },
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    
    {
        question: "What is a characteristic of second-generation computers?",
        answers: [
            { text: "Use of integrated circuits", correct: true },
            { text: "Large physical size", correct: false },
            { text: "Low processing speed", correct: false },
            { text: "Use of vacuum tubes", correct: false }
        ]
    },
    {
        question: "Which generation of computers saw the introduction of GUI?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: true },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the third generation of computers?",
        answers: [
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "IBM System/360", correct: true },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the fourth generation of computers?",
        answers: [
            { text: "UNIVAC", correct: false },
            { text: "IBM PC", correct: true },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What technology brought the fourth generation of computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the purpose of an operating system?",
        answers: [
            { text: "Control hardware components", correct: false },
            { text: "Generate electricity", correct: false },
            { text: "Perform calculations", correct: false },
            { text: "Provide an interface between user and hardware", correct: true }
        ]
    },
    {
        question: "Which operating system acts as an interface between the user and hardware?",
        answers: [
            { text: "MS Word", correct: false },
            { text: "UNIX", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Photoshop", correct: false }
        ]
    },
    {
        question: "What does the operating system control?",
        answers: [
            { text: "Hardware only", correct: false },
            { text: "Software only", correct: false },
            { text: "Both hardware and software", correct: true },
            { text: "Neither hardware nor software", correct: false }
        ]
    },
    {
        question: "What is a function of an operating system?",
        answers: [
            { text: "Provide means for proper resource use", correct: true },
            { text: "Allocate resources to programs", correct: true },
            { text: "Control flow of data between applications", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is NOT an operating system?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Adobe Photoshop", correct: true },
            { text: "Linux", correct: false },
            { text: "MacOS", correct: false }
        ]
    },
    {
        question: "What function does an operating system perform during booting?",
        answers: [
            { text: "Load user programs into memory", correct: true },
            { text: "Erase memory", correct: false },
            { text: "Display results on monitor", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which operating system is known for its command-line interface?",
        answers: [
            { text: "Windows", correct: false },
            { text: "MacOS", correct: false },
            { text: "MS-DOS", correct: true },
            { text: "Linux", correct: false }
        ]
    },
    {
        question: "What is the primary function of an impact printer?",
        answers: [
            { text: "Create high-quality prints", correct: false },
            { text: "Operate silently", correct: false },
            { text: "Produce carbon copies", correct: true },
            { text: "Use toner cartridges", correct: false }
        ]
    },
    {
        question: "Which type of printer uses a ribbon?",
        answers: [
            { text: "Laser printer", correct: false },
            { text: "Inkjet printer", correct: false },
            { text: "Dot matrix printer", correct: true },
            { text: "Thermal printer", correct: false }
        ]
    },
    {
        question: "What type of memory is non-volatile?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: true },
            { text: "Cache memory", correct: false },
            { text: "Hard disk", correct: false }
        ]
    },
    {
        question: "Which storage device is most commonly used for long-term data storage?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: false },
            { text: "Hard disk", correct: true },
            { text: "Cache memory", correct: false }
        ]
    },
    {
        question: "What technology replaced magnetic drums in second-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Magnetic core", correct: true },
            { text: "Semiconductors", correct: false }
        ]
    },
    {
        question: "Which generation of computers introduced the concept of high-level programming languages?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: true },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
   
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "Which operating system was known for its graphical user interface (GUI)?",
        answers: [
            { text: "MS-DOS", correct: false },
            { text: "UNIX", correct: false },
            { text: "MacOS", correct: true },
            { text: "Windows", correct: false }
        ]
    },
    {
        question: "What does MS-DOS stand for?",
        answers: [
            { text: "Microsoft Disk Operating System", correct: true },
            { text: "Micro System Disk Operating System", correct: false },
            { text: "Multi-Screen Disk Operating System", correct: false },
            { text: "Mobile System Disk Operating System", correct: false }
        ]
    },
    {
        question: "What function does the operating system perform regarding resources?",
        answers: [
            { text: "Allocate resources to programs", correct: true },
            { text: "Control hardware and software", correct: true },
            { text: "Co-ordinate flow of data", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which operating system is NOT Windows-based?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Linux", correct: true },
            { text: "Windows Server 2003", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the first generation of computers?",
        answers: [
            { text: "UNIVAC", correct: true },
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "Which generation of computers used punched cards for data input?",
        answers: [
            { text: "First generation", correct: true },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What is a characteristic of second-generation computers?",
        answers: [
            { text: "Use of integrated circuits", correct: true },
            { text: "Large physical size", correct: false },
            { text: "Low processing speed", correct: false },
            { text: "Use of vacuum tubes", correct: false }
        ]
    },
    {
        question: "Which generation of computers saw the introduction of GUI?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: true },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the third generation of computers?",
        answers: [
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "IBM System/360", correct: true },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the fourth generation of computers?",
        answers: [
            { text: "UNIVAC", correct: false },
            { text: "IBM PC", correct: true },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What technology brought the fourth generation of computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the purpose of an operating system?",
        answers: [
            { text: "Control hardware components", correct: false },
            { text: "Generate electricity", correct: false },
            { text: "Perform calculations", correct: false },
            { text: "Provide an interface between user and hardware", correct: true }
        ]
    },
    {
        question: "Which operating system acts as an interface between the user and hardware?",
        answers: [
            { text: "MS Word", correct: false },
            { text: "UNIX", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Photoshop", correct: false }
        ]
    },
    {
        question: "What does the operating system control?",
        answers: [
            { text: "Hardware only", correct: false },
            { text: "Software only", correct: false },
            { text: "Both hardware and software", correct: true },
            { text: "Neither hardware nor software", correct: false }
        ]
    },
    {
        question: "What is a function of an operating system?",
        answers: [
            { text: "Provide means for proper resource use", correct: true },
            { text: "Allocate resources to programs", correct: true },
            { text: "Control flow of data between applications", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is NOT an operating system?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Adobe Photoshop", correct: true },
            { text: "Linux", correct: false },
            { text: "MacOS", correct: false }
        ]
    },
    {
        question: "What function does an operating system perform during booting?",
        answers: [
            { text: "Load user programs into memory", correct: true },
            { text: "Erase memory", correct: false },
            { text: "Display results on monitor", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which operating system is known for its command-line interface?",
        answers: [
            { text: "Windows", correct: false },
            { text: "MacOS", correct: false },
            { text: "MS-DOS", correct: true },
            { text: "Linux", correct: false }
       

 ]
    },
    {
        question: "What is the primary function of an impact printer?",
        answers: [
            { text: "Create high-quality prints", correct: false },
            { text: "Operate silently", correct: false },
            { text: "Produce carbon copies", correct: true },
            { text: "Use toner cartridges", correct: false }
        ]
    },
    {
        question: "Which type of printer uses a ribbon?",
        answers: [
            { text: "Laser printer", correct: false },
            { text: "Inkjet printer", correct: false },
            { text: "Dot matrix printer", correct: true },
            { text: "Thermal printer", correct: false }
        ]
    },
    {
        question: "What type of memory is non-volatile?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: true },
            { text: "Cache memory", correct: false },
            { text: "Hard disk", correct: false }
        ]
    },
    {
        question: "Which storage device is most commonly used for long-term data storage?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: false },
            { text: "Hard disk", correct: true },
            { text: "Cache memory", correct: false }
        ]
    },
    {
        question: "What technology replaced magnetic drums in second-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Magnetic core", correct: true },
            { text: "Semiconductors", correct: false }
        ]
    },
    {
        question: "Which generation of computers introduced the concept of high-level programming languages?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: true },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What technology brought fourth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Magnetic drums", correct: false }
        ]
    },
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "Which operating system was known for its graphical user interface (GUI)?",
        answers: [
            { text: "MS-DOS", correct: false },
            { text: "UNIX", correct: false },
            { text: "MacOS", correct: true },
            { text: "Windows", correct: false }
        ]
    },
    {
        question: "What does MS-DOS stand for?",
        answers: [
            { text: "Microsoft Disk Operating System", correct: true },
            { text: "Micro System Disk Operating System", correct: false },
            { text: "Multi-Screen Disk Operating System", correct: false },
            { text: "Mobile System Disk Operating System", correct: false }
        ]
    },
    {
        question: "What function does the operating system perform regarding resources?",
        answers: [
            { text: "Allocate resources to programs", correct: true },
            { text: "Control hardware and software", correct: true },
            { text: "Co-ordinate flow of data", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which operating system is NOT Windows-based?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Linux", correct: true },
            { text: "Windows Server 2003", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the first generation of computers?",
        answers: [
            { text: "UNIVAC", correct: true },
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "Which generation of computers used punched cards for data input?",
        answers: [
            { text: "First generation", correct: true },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What is a characteristic of second-generation computers?",
        answers: [
            { text: "Use of integrated circuits", correct: true },
            { text: "Large physical size", correct: false },
            { text: "Low processing speed", correct: false },
            { text: "Use of vacuum tubes", correct: false }
        ]
    },
    {
        question: "Which generation of computers saw the introduction of GUI?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: true },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the third generation of computers?",
        answers: [
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "IBM System/360", correct: true },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the fourth generation of computers?",
        answers: [
            { text: "UNIVAC", correct: false },
            { text: "IBM PC", correct: true },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What technology brought the fourth generation of computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the purpose of an operating system?",
        answers: [
            { text: "Control hardware components", correct

: false },
            { text: "Generate electricity", correct: false },
            { text: "Perform calculations", correct: false },
            { text: "Provide an interface between user and hardware", correct: true }
        ]
    },
    {
        question: "Which operating system acts as an interface between the user and hardware?",
        answers: [
            { text: "MS Word", correct: false },
            { text: "UNIX", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Photoshop", correct: false }
        ]
    },
    {
        question: "What does the operating system control?",
        answers: [
            { text: "Hardware only", correct: false },
            { text: "Software only", correct: false },
            { text: "Both hardware and software", correct: true },
            { text: "Neither hardware nor software", correct: false }
        ]
    },
    {
        question: "What is a function of an operating system?",
        answers: [
            { text: "Provide means for proper resource use", correct: true },
            { text: "Allocate resources to programs", correct: true },
            { text: "Control flow of data between applications", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is NOT an operating system?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Adobe Photoshop", correct: true },
            { text: "Linux", correct: false },
            { text: "MacOS", correct: false }
        ]
    },
    {
        question: "What function does an operating system perform during booting?",
        answers: [
            { text: "Load user programs into memory", correct: true },
            { text: "Erase memory", correct: false },
            { text: "Display results on monitor", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which operating system is known for its command-line interface?",
        answers: [
            { text: "Windows", correct: false },
            { text: "MacOS", correct: false },
            { text: "MS-DOS", correct: true },
            { text: "Linux", correct: false }
        ]
    },
    {
        question: "What is the primary function of an impact printer?",
        answers: [
            { text: "Create high-quality prints", correct: false },
            { text: "Operate silently", correct: false },
            { text: "Produce carbon copies", correct: true },
            { text: "Use toner cartridges", correct: false }
        ]
    },
    {
        question: "Which type of printer uses a ribbon?",
        answers: [
            { text: "Laser printer", correct: false },
            { text: "Inkjet printer", correct: false },
            { text: "Dot matrix printer", correct: true },
            { text: "Thermal printer", correct: false }
        ]
    },
    {
        question: "What type of memory is non-volatile?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: true },
            { text: "Cache memory", correct: false },
            { text: "Hard disk", correct: false }
        ]
    },
    {
        question: "Which storage device is most commonly used for long-term data storage?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: false },
            { text: "Hard disk", correct: true },
            { text: "Cache memory", correct: false }
        ]
    },
    {
        question: "What technology replaced magnetic drums in second-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Magnetic core", correct: true },
            { text: "Semiconductors", correct: false }
        ]
    },
    {
        question: "Which generation of computers introduced the concept of high-level programming languages?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: true },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What technology brought fourth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Magnetic drums", correct: false }
        ]
    },
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "Which operating system was known for its graphical user interface (GUI)?",
        answers: [
            { text: "MS-DOS", correct: false },
            { text: "UNIX", correct: false },
            { text: "MacOS", correct: true },
            { text: "Windows", correct: false }
        ]
    },
    {
        question: "What does MS-DOS stand for?",
        answers: [
            { text: "Microsoft Disk Operating System", correct: true },
            { text: "Micro System Disk Operating System", correct: false },
            { text: "Multi-Screen Disk Operating System", correct: false },
            { text: "Mobile System Disk Operating System", correct: false }
        ]
    },
    {
        question: "What function does the operating system perform regarding resources?",
        answers: [
            { text: "Allocate resources to programs", correct: true },
            { text: "Control hardware and software", correct: true },
            { text: "Co-ordinate flow of data", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which operating system is NOT Windows-based?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Linux", correct: true },
            { text: "Windows Server 2003", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the first generation of computers?",
        answers: [
            { text: "UNIVAC", correct: true },
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
   
    {
        question: "What is a characteristic of second-generation computers?",
        answers: [
            { text: "Use of integrated circuits", correct: true },
            { text: "Large physical size", correct: false },
            { text: "Low processing speed", correct: false },
            { text: "Use of vacuum tubes", correct: false }
        ]
    },
    {
        question: "Which generation of computers saw the introduction of GUI?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: true },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the third generation of computers?",
        answers: [
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "IBM System/360", correct: true },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the fourth generation of computers?",
        answers: [
            { text: "UNIVAC", correct: false },
            { text: "IBM PC", correct: true },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What technology brought the fourth generation of computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the purpose of an operating system?",
        answers: [
            { text: "Control hardware components", correct: false },
            { text: "Generate electricity", correct: false },
            { text: "Perform calculations", correct: false },
            { text: "Provide an interface between user and hardware", correct: true }
        ]
    },
    {
        question: "Which operating system acts as an interface between the user and hardware?",
        answers: [
            { text: "MS Word", correct: false },
            { text: "UNIX", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Photoshop", correct: false }
        ]
    },
    {
        question: "What does the operating system control?",
        answers: [
            { text: "Hardware only", correct: false },
            { text: "Software only", correct: false },
            { text: "Both hardware and software", correct: true },
            { text: "Neither hardware nor software", correct: false }
        ]
    },
    {
        question: "What is a function of an operating system?",
        answers: [
            { text: "Provide means for proper resource use", correct: true },
            { text: "Allocate resources to programs", correct: true },
            { text: "Control flow of data between applications", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is NOT an operating system?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Adobe Photoshop", correct: true },
            { text: "Linux", correct: false },
            { text: "MacOS", correct: false }
        ]
    },
    {
        question: "What function does an operating system perform during booting?",
        answers: [
            { text: "Load user programs into memory", correct: true },
            { text: "Erase memory", correct: false },
            { text: "Display results on monitor", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which operating system is known for its command-line interface?",
        answers: [
            { text: "Windows", correct: false },
            { text: "MacOS", correct: false },
            { text: "MS-DOS", correct: true },
            { text: "Linux", correct: false }
        ]
    },
    {
        question: "What is the primary function of an impact printer?",
        answers: [
            { text: "Create high-quality prints", correct: false },
            { text: "Operate silently", correct: false },
            { text: "Produce carbon copies", correct: true },
            { text: "Use toner cartridges", correct: false }
        ]
    },
    {
        question: "Which type of printer uses a ribbon?",
        answers: [
            { text: "Laser printer", correct: false },
            { text: "Inkjet printer", correct: false },
            { text: "Dot matrix printer", correct: true },
            { text: "Thermal printer", correct: false }
        ]
    },
    {
        question: "What type of memory is non-volatile?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: true },
            { text: "Cache memory", correct: false },
            { text: "Hard disk", correct: false }
        ]
    },
    {
        question: "Which storage device is most commonly used for long-term data storage?",
        answers: [
            { text: "RAM", correct: false },
            { text: "ROM", correct: false },
            { text: "Hard disk", correct: true },
            { text: "Cache memory", correct: false }
        ]
    },
    {
        question: "What technology replaced magnetic drums in second-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Magnetic core", correct: true },
            { text: "Semiconductors", correct: false }
        ]
    },
    {
        question: "Which generation of computers introduced the concept of high-level programming languages?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: true },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What technology brought fourth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Magnetic drums", correct: false }
        ]
    },
   
    {
        question: "Which operating system was known for its graphical user interface (GUI)?",
        answers: [
            { text: "MS-DOS", correct: false },
            { text: "UNIX", correct: false },
            { text: "MacOS", correct: true },
            { text: "Windows", correct: false }
        ]
    },
    {
        question: "What does MS-DOS stand for?",
        answers: [
            { text: "Microsoft Disk Operating System", correct: true },
            { text: "Micro System Disk Operating System", correct: false },
            { text: "Multi-Screen Disk Operating System", correct: false },
            { text: "Mobile System Disk Operating System", correct: false }
        ]
    },
    {
        question: "What function does the operating system perform regarding resources?",
        answers: [
            { text: "Allocate resources to programs", correct: true },
            { text: "Control hardware and software", correct: true },
            { text: "Co-ordinate flow of data", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which operating system is NOT Windows-based?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Linux", correct: true },
            { text: "Windows Server 2003", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the first generation of computers?",
        answers: [
            { text: "UNIVAC", correct: true },
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "Which generation of computers used punched cards for data input?",
        answers: [
            { text: "First generation", correct: true },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: false },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What is a characteristic of second-generation computers?",
        answers: [
            { text: "Use of integrated circuits", correct: true },
            { text: "Large physical size", correct: false },
            { text: "Low processing speed", correct: false },
            { text: "Use of vacuum tubes", correct: false }
        ]
    },
    {
        question: "Which generation of computers saw the introduction of GUI?",
        answers: [
            { text: "First generation", correct: false },
            { text: "Second generation", correct: false },
            { text: "Third generation", correct: true },
            { text: "Fourth generation", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the third generation of computers?",
        answers: [
            { text: "IBM PC", correct: false },
            { text: "Macintosh", correct: false },
            { text: "IBM System/360", correct: true },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What was a notable machine of the fourth generation of computers?",
        answers: [
            { text: "UNIVAC", correct: false },
            { text: "IBM PC", correct: true },
            { text: "Macintosh", correct: false },
            { text: "ENIAC", correct: false }
        ]
    },
    {
        question: "What technology brought the fourth generation of computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Transistors", correct: false },
            { text: "Integrated circuits", correct: true },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "What is the primary focus of fifth-generation computers?",
        answers: [
            { text: "Vacuum tubes", correct: false },
            { text: "Artificial intelligence", correct: true },
            { text: "Integrated circuits", correct: false },
            { text: "Microprocessors", correct: false }
        ]
    },
    {
        question: "Which operating system was known for its graphical user interface (GUI)?",
        answers: [
            { text: "MS-DOS", correct: false },
            { text: "UNIX", correct: false },
            { text: "MacOS", correct: true },
            { text: "Windows", correct: false }
        ]
    },
    {
        question: "What does MS-DOS stand for?",
        answers: [
            { text: "Microsoft Disk Operating System", correct: true },
            { text: "Micro System Disk Operating System", correct: false },
            { text: "Multi-Screen Disk Operating System", correct: false },
            { text: "Mobile System Disk Operating System", correct: false }
        ]
    },
    {
        question: "What function does the operating system perform regarding resources?",
        answers: [
            { text: "Allocate resources to programs", correct: true },
            { text: "Control hardware and software", correct: true },
            { text: "Co-ordinate flow of data", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which operating system is NOT Windows-based?",
        answers: [
            { text: "Windows 10", correct: false },
            { text: "Windows XP", correct: false },
            { text: "Linux", correct: true },
            { text: "Windows Server 2003", correct: false }
        ]
    }
];





const start=document.querySelector('.start-quiz');

const ques_cont=document.querySelector('.ques-cont');



var ques_index;
ques_index=0;

var ansNo=0;


let qe=document.querySelector('#ques');
let next=document.querySelector('#next');
let option_cont=document.querySelector('.options-cont')



function start_quiz(){

    start.style.display='none';
    ques_cont.style.display='block';
}
    
function render_ques(){

ansNo=0;
if(ques_index>9){
    ques_index=0;
}
    option_cont.innerHTML='';
    
    let q=questions[ques_index];
    ques_index++;

    let ans=q.answers;

    ans.forEach(element => {
        
        let btn=document.createElement('button');
        btn.classList.add('options')
        ansNo++;
        btn.textContent=`${ansNo} : ${element.text}`;
        option_cont.appendChild(btn);
        btn.dataset.correct=element.correct;
        console.log(element.correct);

        btn.addEventListener('click', () => {
            checkans(btn);
            disableopt();
        });

    });;
    qe.textContent=` question ${ques_index}: ${q.question}`;
}
function disableopt(){
    var optionButtons = document.querySelectorAll('.options');
    optionButtons.forEach(button => {
        button.disabled = true;
        if(
            button.dataset.correct==='true'){
                button.classList.add('green');
        
            }
    });


}

function checkans(btn){

    
    if(btn.dataset.correct === 'true' ){
        btn.classList.add('green');
        
    }
    else{

        btn.classList.add('red');
        
    }


}


render_ques();

next.addEventListener('click',()=>{
    render_ques();

})