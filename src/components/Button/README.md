## DESCRIPTION 
The native button with css

## API 

| Property            | Description                          | Type         | Default             | Semantic Property |
|---------------------|--------------------------------------|--------------|---------------------|-------------------|
| **color** | Can be `red` `green` `yellow`, `#2f2f2f` `rgb(123, 123, 123)` and so on | `string` |||
| **size** | Can be `px`, `rem`, `em` | `string` |||
| **rounded** | Rounded Button| `boolean` |||
| **circle** | Circle Button| `boolean` |||
| **pressed** | Pressed Button | `boolean` |||
| **glassed** | Transparent Button | `boolean` |||
| **primary** | PRIMARY Button | `boolean` || `type="primary"` |
| **danger** | DANGER Button | `boolean` || `type="danger"` |

## NOTE
  * **primary**, **danger** are most popular

  * Similar as native button, your **onClick**, **disabled**, **style**, **className**, **ref** ... will passed throught

  * **color** will set inline style as `background-color`

  * **size** will set inline style as `font-size`
