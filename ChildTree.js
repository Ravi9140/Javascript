function tree_sort(a,b)
{
    return a.depth-b.depth;
}

function find_child_tree(original_tree,parent_search,node_id)
{
    for(let j=0;j<original_tree.length;j++)
    {
        if(original_tree[j].id===node_id)
        {
            child_tree.push(original_tree[j]);
        }

        if(parent_search.includes(original_tree[j].parent_id))
        {
            parent_search.push(original_tree[j].id);
            child_tree.push(original_tree[j]);
        }
    }

    child_tree.sort(tree_sort);
    console.log("Child Tree:");
    console.log(child_tree);
}

var original_tree= [ {depth:0 , id:"f35vz2f"}, {depth:0 , id:"f359354"}, 
    {depth:1 , id:"f35e0b0", parent_id:"f359354"}, {depth:2 , id:"f35ji24", parent_id:"f35e0b0"},
    {depth:2 , id:"f35rnwb", parent_id:""}, {depth:2 , id:"f35ojh4", parent_id:"f35e0b0"},
    {depth:3 , id:"f35lmch", parent_id:"f35ji24"}, {depth:3 , id:"f35kl96", parent_id:"f35ji24"}];

var parent_search=[];
var child_tree=[];
const node_id = "f359354";
parent_search.push(node_id);

original_tree.sort(tree_sort);
console.log("Original Tree: ");
console.log(original_tree);

console.log(`Entered Node ID: ${node_id}`)

find_child_tree(original_tree,parent_search,node_id);
