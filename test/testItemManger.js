const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", accounts => {
    it("should be able to add an item", async function () {
        const ItemManagerContract = await ItemManager.deployed();
        const ItemName = "test1";
        const ItemPrice = 500;

        const result = await ItemManagerContract.createItem(ItemName, ItemPrice, {from: accounts[0]})
        assert.equal(result.logs[0].args._itemIndex, 0, "Its not the forst time");
        const item = await ItemManagerContract.items(0);
        assert.equal(item._identifier,ItemName,"The idesntifier is different");
    })
})