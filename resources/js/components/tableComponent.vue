<template>
<div class="table-component">
    <table class="table">
        <thead>
            <tr class="table__header">
                <th scope="col">First</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Mark</td>
            </tr>
            <tr>
                <td>Jacob</td>
            </tr>
            <tr>
                <td>Larry</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
export default {
    props:['amountOfRows','amountOfCols'],
}
</script>
