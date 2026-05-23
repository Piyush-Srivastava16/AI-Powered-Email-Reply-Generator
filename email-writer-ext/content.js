console.log("Email Writer");

function getEmailContent() {
    const selectors = [
        '.h7',
        '.a3s.aiL',
        '.gmail_quotes',
        '[role="presentation"]'
    ];

    for (const selector of selectors) {
        const content = document.querySelector(selector);

        if (content) {
            return content.innerText.trim();
        }
    }

    return '';
}

function findComposeToolbar() {
    const selectors = ['.btC', '.aDh', '[role="toolbar"]', '.gU.Up'];

    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);

        if (toolbar) {
            return toolbar;
        }
    }

    return null;
}

function createAIButton() {
    const button = document.createElement("div");

    button.className = "T-I J-J5-Ji aoO v7 T-I-atl L3 ai-reply-button";
    button.style.marginRight = "8px";

    button.innerText = "AI Reply";

    button.setAttribute("role", "button");
    button.setAttribute("data-tooltip", "Generate AI Reply");

    button.addEventListener("click", () => {
        console.log("AI Reply Clicked");
    });

    return button;
}

function injectButton() {

    // Remove existing button
    const existingButton = document.querySelector(".ai-reply-button");

    if (existingButton) {
        existingButton.remove();
    }

    const toolbar = findComposeToolbar();

    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }

    console.log("Toolbar found");

    const button = createAIButton();

    button.classList.add('ai-reply-button');

    button.addEventListener('click', async () => {

        try {

            button.innerHTML = 'Generating...';

            // disable click
            button.style.pointerEvents = "none";
            button.style.opacity = "0.6";

            const emailContent = getEmailContent();

            console.log("Email Content:", emailContent);

            const response = await fetch('https://email-writer-backend-h4up.onrender.com/api/email/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailContent: emailContent,
                    tone: "professional"
                })
            });

            if (!response.ok) {
                throw new Error("API Request Failed");
            }

            const generatedReply = await response.text();

            console.log("Generated Reply:", generatedReply);

            const ComposeBox = document.querySelector(
                '[role="textbox"][g_editable="true"]'
            );

            if (ComposeBox) {

                ComposeBox.focus();

                document.execCommand(
                    'insertText',
                    false,
                    generatedReply
                );
            }

        } catch (error) {

            console.error("Extension Error:", error);

        } finally {

            button.innerHTML = 'AI Reply';

            // enable click again
            button.style.pointerEvents = "auto";
            button.style.opacity = "1";
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
}

const observer = new MutationObserver((mutations) => {

    for (const mutation of mutations) {

        const addedNodes = Array.from(mutation.addedNodes);

        const hasComposeElements = addedNodes.some(node =>

            node.nodeType === Node.ELEMENT_NODE &&

            (
                (node.matches &&
                    node.matches('.aDh, .btC, [role="dialog"]')) ||

                (node.querySelector &&
                    node.querySelector('.aDh, .btC, [role="dialog"]'))
            )
        );

        if (hasComposeElements) {

            console.log("Compose window detected");

            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});