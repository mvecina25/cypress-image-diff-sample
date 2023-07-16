describe( 'Image Snapshot', () => {
    it('should compare screenshot of the entire page', () => {
        /*
        Steps involved in carrying out a visual regression test:

        1. At the start of the test, take a snapshot (an actual picture) of what the interface looks like. This initial snapshot is called the baseline.
        2. Interact with the page using your testing tool, simulating user actions such as changing the device orientation, opening a modal, clicking buttons, etc.
        3. As these changes occur, the testing tool captures additional snapshots and compares them to the baseline image on a pixel-to-pixel basis.
        4. The testing tool generates a report highlighting any differences between the baseline snapshot and the subsequent captures.
        5. Review the generated reports to identify any required fixes or updates.
        6. If fixes are needed, make the necessary adjustments and rerun the tests.
        7. If the changes are intentional, update the baseline image to reflect the new expected visual appearance, and run the tests again.
        */

        cy.visit('http://jupiter.cloud.planittesting.com')
        
        // This will hide the "Start Shopping" button intentionally to force the failure.
        cy.get(':nth-child(3) > .btn').hideElement()

        // Take a snapshot with a specific name ('Start Shopping') and compare it to the baseline
        cy.compareSnapshot('Start Shopping')
    })
})