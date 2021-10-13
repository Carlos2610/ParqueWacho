import java.awt.*;
import javax.swing.*;

public class visitor{

    private static void createWindow(){
        JFrame frame = new JFrame("Parque Wacho, el lugar mas emocionante");       
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);       
        JLabel textLabel = new JLabel("I'm a label in the window",SwingConstants.CENTER);
        JButton but = new JButton("Iniciar sesion");
        JTextField name = new JTextField(20);
        JPasswordField pass = new JPasswordField(8);
        name.setPreferredSize(new Dimension(600, 150));
       // pass.setPreferredSize(new Dimension(600, 150));
        //but.setPreferredSize(new Dimension(600, 150));
        //frame.getContentPane().add(name);
        //frame.add(pass);
        //frame.add(but);
        textLabel.setPreferredSize(new Dimension(400, 150));       
        frame.getContentPane().add(textLabel, BorderLayout.CENTER);
        //frame.setLocationRelativeTo(null); 
             
        frame.pack();       
        frame.setVisible(true);
        
        
    }

    public static void main(String[] args){
        createWindow();

        String cmd = "node FWQ_Visitor.js";
        Runtime run = Runtime. getRuntime();
        try{
            run. exec(cmd);
        }catch(Exception e){
            System.out.println("Error");
        }
    }

}