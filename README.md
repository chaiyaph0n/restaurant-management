# Basic restaurant management

This project is a restuarant webapp demo version. The feature of this demo are following 
- Bill Calculator
- Table Reservation
- Restuarant Management
  - Price setting
  - Promocode management

## Installing
```
yarn install
```
then
```
yarn run dev
```

## Feature
- Bill Calculator Page
  - When select the Person, webapp will calculate the sub total and total amoute automatically
  - Each uded promocode for current bill will shown under Person field
  - You can insert the promocode following by the instruction sheet(LUCKY ONE, LUCKY TWO, 4PAY3 and discount 20 when bill is over 6000). By the way, when you input the promotion that relate to person discount like 4PAY3, Sub Total will be re calculate and display sub total before use this promocode with line decorate and display new sub total that was discount by this promotion.
  - You can click clear icon for reset all value

- Table Reservation Page
  - In this page we have 2 main part, there're Menu for Add Reservation and Reservation Detail Table
  - Menu for Add Reservation, to reserve the table you need to add the Customer Name, Time(selector number form 12-19, I'm assumming this restuarant open time is 12.00 - 20.00) and select table. When click 'reserve' if table is unvaliable, there will be display the alert messsage
  - In Reservation table detail. I'm decide to show what table are avialable now. Table will show avialation table each hour (12.00 - 19.00) by display text something this "Counter - 12/1", It's mean couter table have 12 table but 1 table is not avialable (12/1 = all table/using table)
  - You can click the 'detail' button for show the detail about table for each hour (who using, customer name/phone) and you can remove the reservation by click 'remove' button
  
- Restuarant Management Page
  - Price management, you can setting price for restuarant in the part
  - Promocode management, we have two part in this section.
    - Table that show all promocode in restaurant. As you see, you can view the promocode detail by click 'view' button, then the detail will show in the form at the right side as a disabled form. By the way, 'edit' action is work almost like 'view' action but, each field in form is not diabled
    - Meaning of each field in form is
      - Code: Code for Promocode. Ex. 'LUCKY ONE'
      - Description: Promocode description like 'Discount 15% when ...'
      - Discount Type and condition: Discount Type is a type of promotion, it is a Bill discout or Person discount and the condition is condition when use this promotion. I'm hardcode in function for check onlyt equal or greater than condition. Ex. Select 'Bill' and condition is '1000' it mean you can use this promocode when bill is equal or greater than 1000 baht
      - Discount: Dicount for the promotion. You need to add only the discount of promotion some kind like, If '4PAY3' add '1' because discount is 1 or 'Discount 15%' you need to convert form percent to float numbet, it this case you should input '0.15'
      - Using Count: Set or reset the promotion use counting. this field is for situation when you need to limit the promotion usage. ex. This promotion can use only 5 time, when customer1 or 2 or ... used this promotion. Counter will move 1 step.
      - Limit Using: If you want to limit the promotion using time, You can set it.
      - Active: Set active status to promocode
      - Promotion: Declare this promocode to restuarant's promotion, Ex. when I declare the promocode 'Discount 10% when bil is eqaul greater the 1000 baht'. Every customer can use this promocode by default.
   - To add promocode, you can type the promocode detail to form and submit it or clear the form and submit because I decalre form for work as a 'ADD FORM' by default. By the way this form can intregate to 'EDIT ACTION' and 'VIEW ACTION'.
