// JavaScript implementation of Binary Search

// Author: Youcef Madadi

// Binary Tree 
export default class BinaryTree{
    left=null;
    right=null;
    value;

    constructor(value,left,right) {
        this.value = value;
        if(left instanceof BinaryTree)this.left = left;
        if(right instanceof BinaryTree)this.right= right;
    }
    AddValue(value){
        if(value>this.value){
            if(this.right) return this.right.AddValue(value);
            this.right=new BinaryTree(value)
        }else if(value<this.value){
            if(this.left) return this.left.AddValue(value);
            this.left=new BinaryTree(value)
        }else return;
    }
    Print(){
        if(this.left) this.left.Print();
        console.log(this.value)
        if(this.right) this.right.Print();
    }
    PrintLRM(){
        if(this.left) this.left.Print();
        if(this.right) this.right.Print();
        console.log(this.value)
    }
    PrintRML(){
        if(this.right) this.right.Print();
        console.log(this.value)
        if(this.left) this.left.Print();
    }
    findValue(value){
        if( this.value > value ) {
            if(this.left)return this.left.findValue(value);
        }
        else if( this.value < value ) {
            if(this.right) return this.right.findValue(value);
        }
        else return true
        return false;
    }
    static CreateRandomTree(){
        let root=new BinaryTree(Math.floor(Math.random() * 100)),
            deep= Math.floor(Math.random() * 50);
        for( let i=0 ; i<deep; i++){
            root.AddValue(Math.floor(Math.random() * 100))
        }
        return root;
    }
}
