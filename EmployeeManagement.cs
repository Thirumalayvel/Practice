// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        Console.WriteLine ("Try programiz.pro");
        Employee emp1=new FullTimeEmployee(18,"mani",5000);
        PartTimeEmployee emp2=new PartTimeEmployee(20,"naresh",100);
        Console.WriteLine(emp1.Name+" "+emp1.calculateSalary());
        emp2.updateWork(5);
        Console.WriteLine(emp2.Name+" "+emp2.calculateSalary());
    }
}

abstract public class Employee{
    public int id;
    private string name;
    public string Name{
        get{ return name;}
        set{ name=value;}
    }
   public Employee(int id,string name){
        this.id=id;
        this.name=name;
    }
    public abstract double calculateSalary();
}
public class FullTimeEmployee: Employee{
    private double baseSalary;
    public FullTimeEmployee(int id, string name,double baseSalary):base(id,name)
    {
        this.baseSalary=baseSalary;    
    }
    
   public override double calculateSalary(){ // 
        return baseSalary;
    }
}
public class PartTimeEmployee:Employee
{
    private double hourlyRate;
    private int hourWorked;
    public PartTimeEmployee(int id, string name, double hourlyRate):base(id,name){
        this.hourlyRate=hourlyRate;
    }
    public void updateWork(int hour){
        hourWorked+=hour;
    }
 
    public  override double calculateSalary(){
        return hourlyRate*hourWorked;
    }
}