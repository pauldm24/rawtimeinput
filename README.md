# React Raw Time Input

Project dependencies

* react
* moment

### Usage
Install the package
Install the package.
```bash
yarn add rawtimeinput # npm install rawtimeinput --save
```

### Properties

| Property   | Required | Description                                                 | Default |
| ---------- | :------: | ----------------------------------------------------------- | :-----: |
| value      | true     | initial value `string` (`00:00:00`) or instance of `moment` | none    |
| onChange   | true     | function to be called on change                             | none    |
| onBlur     | true     | function to be called on change                             | none    |
| name       | true     | the name of the input                                       | none    |
| second     | true     | should second added on the input                            | `false` |
| forceValue | true     | should force to return a value on empty `00:00:00`          | `false` |

### Return Value

> Return an object value

> `name` and `value`

> name is the same value pass from the props

> value is an instance of moment, you can parse the value using moment e.g time using `moment(value).format('HH:mm:ss')`

### Example
```javascript
    <TimeInput
        name="timeOfDate"
        value="12:00:00"
        onChange={e => console.log(objValue)}
        onBlur={e => console.log(objValue)}
        second
        forceValue
    />
```

### Demo

```bash
git clone git@github.com:pauldm24/rawtimeinput.git
cd rawtimeinput
yarn # npm install

```

Browse @ [http://localhost:8181](http://localhost:8181 "Open")